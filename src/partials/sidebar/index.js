import React from "react";
import PropTypes from "prop-types";
import { withRouteData } from "react-static";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Fuse from "fuse.js";
import { maxBy, findIndex, includes, last, isEmpty } from "lodash";
import SVG from "react-inlinesvg";

import victoryLogo from "../../../static/logos/logo-victory.svg";
import Introduction from "./components/introduction";
import Category from "./components/category";
import SearchInput from "./components/search-input";
import TableOfContents from "./components/table-of-contents";
import { SidebarSectionHeading } from "./styles";

// was gonna pass this but I'm leaning towards this being an internal detail since at the end of the day the proper
// behavior is based on a bunch of magic strings for a non-configurable internal method
const documentationSubcategories = ["charts", "containers", "more"];

const getPathPrefix = item => {
  // just a bunch of one-offs, elegance is harder to realize gains from
  if (item.title === "Getting Started" && item.category === "introduction") {
    return "/docs/";
  }

  if (item.title === "Native" && item.category === "introduction") {
    return "/docs/native/";
  }

  if (item.category === "support") {
    return "/docs/faq/";
  }
  if (item.category === "documentation") {
    return "/docs/common-props/";
  }
  const checkedCategory = documentationSubcategories.includes(item.category)
    ? "docs"
    : item.category;
  return `/${checkedCategory}/${item.slug}`;
};

const SidebarContainer = styled.nav`
  background-color: ${({ theme }) => theme.color.nearWhite};
  overflow: scroll;
  overflow-x: hidden;
  padding: 1.8rem 0;
  position: relative;
  width: ${({ theme }) => theme.layout.sidebarWidth};
`;

// only show close button on small devices
const CloseButton = styled.button`
  font-size: 2.8rem;
  position: absolute;
  right: ${({ theme }) => theme.spacing.sm};
  top: ${({ theme }) => `calc(${theme.spacing.sm} - 0.8rem)`};

  @media ${({ theme }) => theme.mediaQuery.md} {
    display: none;
  }
`;

const VictoryLogo = styled(SVG)`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  > svg {
    width: 9.8rem;
  }
`;

const SidebarListItem = styled.li`
  padding: 0;
  margin: 0;
  width: 100%;
`;
const SidebarListItemLink = styled(NavLink)`
  color: #bc5240;
  font-family: ${({ theme }) => theme.font.bold};
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  line-height: ${({ theme }) => theme.typography.lineHeight.sidebarHeading};
  display: block;
  padding: 0.4rem 0.7rem 0.3rem 3.4rem;
  &.is-active {
    background-color: ${({ theme }) => theme.color.darkGray};
  }
`;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredResults: props.content,
      filterTerm: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(value, content) {
    const options = {
      keys: ["data.subHeadings.value", "data.title", "data.category"],
      threshold: 0.2,
      findAllMatches: true,
      distance: 100
    };

    const fuse = new Fuse(this.props.content, options);

    this.setState({
      filteredResults: value ? fuse.search(value) : content,
      filterTerm: value
    });
  }

  clearInput(content) {
    this.setState({
      filteredResults: content,
      filterTerm: ""
    });
  }

  renderLinksList(edges, type, category) {
    const { location } = this.props;
    let filteredEdges = edges.filter(edge => edge.data.type === type);

    if (category) {
      filteredEdges = filteredEdges.filter(edge =>
        category.includes(edge.data.category)
      );
    }

    const renderList = filteredEdges.map(edge => {
      const link = edge.data;

      if (link.display === false) {
        return null;
      }

      // If link is currently active and not under the Introduction section,
      // then display its table of contents underneath it
      const active =
        category !== "introduction" && location.pathname.includes(link.slug)
          ? true
          : this.state.filterTerm !== "";
      const headings =
        this.state.filterTerm !== ""
          ? this.getMatchTree(link, this.state.filterTerm)
          : link.subHeadings;

      return (
        <SidebarListItem
          key={link.slug}
          onClick={() =>
            this.setState({ content: this.state.content, filterTerm: "" })
          }
        >
          <SidebarListItemLink
            to={getPathPrefix(link, location)}
            activeClassName={"is-active"}
            scrollToTop
            prefetch={"data"}
            exact
          >
            {link.title}
          </SidebarListItemLink>
          <TableOfContents
            active={active}
            link={link}
            headings={headings}
            location={location}
            filterTerm={this.state.filterTerm}
          />
        </SidebarListItem>
      );
    });
    return renderList;
  }

  getMatchTree(link, filterTerm) {
    const options = {
      keys: ["value", "subHeadings.value", "subHeadings.subHeadings.value"],
      threshold: 0.2,
      findAllMatches: true,
      distance: 100
    };
    const fuse = new Fuse(link.subHeadings, options);
    const matches = fuse.search(filterTerm);
    if (!isEmpty(matches)) {
      const maxDepth = maxBy(matches, "depth").depth;
      let matchIndices = matches.map(match =>
        findIndex(link.subHeadings, heading =>
          includes(heading.value, match.value)
        )
      );

      matchIndices = matchIndices.sort((a, b) => a - b);
      return link.subHeadings
        .slice(0, last(matchIndices) + 1)
        .reduce((memo, curr, i) => {
          const useHeading =
            i === matchIndices[0] ||
            (i < matchIndices[0] && curr.depth < maxDepth);
          if (useHeading && curr.value !== "Props") {
            memo = memo.concat(curr);
            matchIndices =
              i === matchIndices[0] ? matchIndices.slice(1) : matchIndices;
          }
          return memo;
        }, []);
    }
    return [];
  }

  renderNoResults() {
    return <SidebarSectionHeading>No Results</SidebarSectionHeading>;
  }

  render() {
    const { className, content, location, onCloseClick } = this.props;
    const { filteredResults } = this.state;

    return (
      <SidebarContainer className={className}>
        <CloseButton onClick={onCloseClick}>&times;</CloseButton>
        <VictoryLogo src={victoryLogo} />
        <SearchInput
          onHandleInputChange={this.handleInputChange}
          content={content}
          searchText={this.state.filterTerm}
          onClearInput={this.clearInput.bind(this)}
        />

        {isEmpty(filteredResults) ? (
          this.renderNoResults()
        ) : (
          <div id="sidebar-sections">
            <Introduction
              content={this.renderLinksList(
                filteredResults,
                "docs",
                "introduction"
              )}
            />
            <Category
              title="Support"
              content={this.renderLinksList(filteredResults, "docs", "support")}
              location={location}
            />
            <Category
              title="Guides"
              content={this.renderLinksList(
                filteredResults,
                "guides",
                "guides"
              )}
              location={location}
            />
            <Category
              title="Documentation"
              content={this.renderLinksList(
                filteredResults,
                "docs",
                "documentation"
              )}
              location={location}
              subCategories={[
                {
                  title: "Charts",
                  content: this.renderLinksList(
                    filteredResults,
                    "docs",
                    "charts"
                  )
                },
                {
                  title: "Containers",
                  content: this.renderLinksList(
                    filteredResults,
                    "docs",
                    "containers"
                  )
                },
                {
                  title: "More",
                  content: this.renderLinksList(filteredResults, "docs", "more")
                }
              ]}
            />
          </div>
        )}
      </SidebarContainer>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  content: PropTypes.array,
  hideCloseButton: PropTypes.bool,
  location: PropTypes.shape({ pathname: PropTypes.string }),
  onCloseClick: PropTypes.func
};

Sidebar.defaultProps = {
  className: ""
};

export default withRouteData(Sidebar);
