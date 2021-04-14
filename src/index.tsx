import { requireNativeComponent, ViewStyle } from 'react-native';

type AccessibilityGroupingProps = {
  color: string;
  style: ViewStyle;
};

export const AccessibilityGroupingViewManager = requireNativeComponent<AccessibilityGroupingProps>(
  'AccessibilityGroupingView'
);

export default AccessibilityGroupingViewManager;
