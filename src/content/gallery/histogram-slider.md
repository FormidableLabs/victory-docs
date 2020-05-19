---
id: 21
title: Histogram Slider
scope:
  - styled
  - basketballData
  - Slider
---

```playground_norender
const LIGHT_GREY = "hsl(342.7, 20%, 90%)";
const PINK = "hsl(342.7, 90%, 72.2%)";
const Container = styled.div``;

const Card = styled.div`
  background-color: #24232a;
  border-radius: 5px;
  padding: 32px 25px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-left: 8px solid ${PINK};

  // when rendered in the gallery preview
  a & {
    padding: 20px;
  }
`;

const yearToSeason = year => `${year}-${(year + 1 + "").slice(2, 4)}`;

const YEARS = Object.keys(basketballData).map(year => parseInt(year, 10));
const FIRST_YEAR = YEARS[0];
const LAST_YEAR = YEARS[YEARS.length - 1];
const TOTAL_YEARS = LAST_YEAR - FIRST_YEAR;

const getTooltipText = ({ datum }) => {
  const { binnedData, x0, x1 } = datum;

  const playerCount = binnedData.length;

  if (!playerCount) {
    return null;
  }

  const playerNames = binnedData
    .slice(0, 2)
    .map(({ player }) => {
      const [firstName, lastName] = player.split(" ");
      return lastName ? `${firstName.slice(0, 1)}. ${lastName}` : firstName;
    })
    .join(", ");

  const playerNamesList = `\n (${playerNames}${
    playerCount > 2 ? `, and ${playerCount - 2} more players` : ""
  })`;

  return `${playerCount} player${
    playerCount === 1 ? "" : "s"
  } averaged between ${x0}-${x1} 3PT attempts ${playerNamesList}`;
};

const sharedAxisStyles = {
  axis: {
    stroke: "transparent"
  },
  tickLabels: {
    fill: LIGHT_GREY,
    fontSize: 12
  },
  axisLabel: {
    fill: LIGHT_GREY,
    padding: 36,
    fontSize: 13,
    fontStyle: "italic"
  }
};

const GradientSvg = styled.svg`
  position: fixed;
  opacity: 0;
`;

const App = () => {
  const [year, setYear] = React.useState(FIRST_YEAR);

  return (
    <Container>
      <GradientSvg>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFE29F" />
            <stop offset="47%" stopColor="#FFA99F" />
            <stop offset="100%" stopColor={PINK} />
          </linearGradient>
        </defs>
      </GradientSvg>

      <Card>
        <VictoryChart
          containerComponent={
            <VictoryVoronoiContainer
              labels={getTooltipText}
              voronoiDimension="x"
              labelComponent={
                <VictoryTooltip
                  constrainToVisibleArea
                  style={{
                    fill: LIGHT_GREY,
                    fontSize: 10
                  }}
                  flyoutStyle={{
                    fill: "#24232a",
                    stroke: PINK,
                    strokeWidth: 0.5
                  }}
                />
              }
            />
          }
          height={260}
        >
          <VictoryLabel
            text={`3pt Attempts Per Game Averages (${yearToSeason(year)})`}
            x={225}
            y={20}
            textAnchor="middle"
            style={{ fill: LIGHT_GREY }}
          />
          <VictoryAxis
            style={{
              ...sharedAxisStyles,
              grid: {
                fill: LIGHT_GREY,
                stroke: LIGHT_GREY,
                pointerEvents: "painted",
                strokeWidth: 0.5
              }
            }}
            label="# of players"
            dependentAxis
          />
          <VictoryAxis
            style={{
              ...sharedAxisStyles,
              axisLabel: { ...sharedAxisStyles.axisLabel, padding: 35 }
            }}
            label="3pt attempts per game"
          />
          <VictoryHistogram
            cornerRadius={2}
            domain={{ y: [0, 120] }}
            animate={{ duration: 300 }}
            data={basketballData[year]}
            bins={_.range(0, 16, 2)}
            style={{
              data: {
                stroke: "transparent",
                fill: "url(#gradient1)",
                strokeWidth: 1,
                filter: "drop-shadow(10px 10px 3px #4444dd)"
              },
              labels: {
                fill: "red"
              }
            }}
            x="3pa"
          />
        </VictoryChart>

        <YearSlider year={year} setYear={setYear} />
      </Card>
    </Container>
  );
};

const SliderContainer = styled.div`
  padding: 64px 42px 10px;

  // when rendered in the gallery preview
  a & {
    padding: 32px 36px 10px;
  }
`;

const getYear = percent =>
  Math.round(FIRST_YEAR + TOTAL_YEARS * (percent / 100));

const SEASONS = YEARS.map(year => yearToSeason(year));

const YearSlider = ({ year, setYear }) => {
  const [value, setValue] = React.useState(0);

  return (
    <SliderContainer>
      <Slider
        onChange={newValue => {
          setValue(newValue);
          const calculatedYear = getYear(newValue);

          if (year !== calculatedYear) {
            setYear(calculatedYear);
          }
        }}
        color={PINK}
        value={value}
        maxValue={100}
        tooltipValues={SEASONS}
      />
    </SliderContainer>
  );
};

ReactDOM.render(<App/>, mountNode);
```
