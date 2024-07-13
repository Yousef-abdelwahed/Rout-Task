import React from "react";
import {
  Box,
  Flex,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from "@chakra-ui/react";
import { useData } from "../../context/DataProvider";

const AmountSlider = ({ setFilter, filter }) => {
  const { transactions } = useData();

  const [maxAmount, setMaxAmount] = React.useState(0);
  const [minAmount, setMinAmount] = React.useState(0);
  const handleSliderChange = (values) => {
    setFilter({ ...filter, amountRange: values });
  };
  React.useEffect(() => {
    if (transactions.length > 0) {
      const max = Math.max(
        ...transactions.map((transaction) => transaction.amount)
      );
      const min = Math.min(
        ...transactions.map((transaction) => transaction.amount)
      );
      setMinAmount(min);
      setMaxAmount(max);
      setFilter((filter) => ({ ...filter, amountRange: [minAmount, max] }));
    }
  }, [transactions]);

  return (
    <>
      <Flex
        direction="column"
        align="center"
        w={{ base: "100%", lg: "50%" }}
        mx="auto"
        mb={8}
      >
        <Box w="full">
          <label className="my-4 inline-block">Filter by amount range:</label>
          <RangeSlider
            aria-label={["min", "max"]}
            min={minAmount}
            max={maxAmount}
            step={100}
            onChangeEnd={handleSliderChange}
          >
            <RangeSliderTrack bg="blue.100">
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} boxSize={4} />
            <RangeSliderThumb index={1} boxSize={6} />
          </RangeSlider>
          <Flex justify="space-between">
            <Box>{filter.amountRange[0]}</Box>
            <Box>{filter.amountRange[1]}</Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default AmountSlider;
