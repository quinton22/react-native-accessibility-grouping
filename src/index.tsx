import { NativeModules } from 'react-native';

type AccessibilityGroupingType = {
  multiply(a: number, b: number): Promise<number>;
};

const { AccessibilityGrouping } = NativeModules;

export default AccessibilityGrouping as AccessibilityGroupingType;
