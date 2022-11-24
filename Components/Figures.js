import { View } from "react-native";

function Square(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
    />
  );
}

function Rectangle(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width * 2}
      height={props.height}
      backgroundColor={props.backgroundColor}
    />
  );
}

function Triangle(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      borderStyle={props.borderStyle}
      borderLeftWidth={props.borderLeftWidth}
      borderRightWidth={props.borderRightWidth}
      borderBottomWidth={props.borderBottomWidth}
      borderLeftColor={props.borderLeftColor}
      borderRightColor={props.borderRightColor}
      borderBottomColor={props.borderBottomColor}
    />
  );
}

function Circle(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      borderRadius={props.width / 2}
      backgroundColor={props.backgroundColor}
    />
  );
}

function QuarterCircle(props) {
  return (
    <View
      size="100"
      mt="-2"
      marginTop={-6}
      width={props.width}
      height={props.height}
      borderTopLeftRadius={props.borderTopLeftRadius}
      borderTopRightRadius={props.borderTopRightRadius}
      borderBottomLeftRadius={props.borderBottomLeftRadius}
      borderBottomRightRadius={props.borderBottomRightRadius}
      backgroundColor={props.backgroundColor}
    />
  );
}

export { Square, Rectangle, Triangle, Circle, QuarterCircle };
