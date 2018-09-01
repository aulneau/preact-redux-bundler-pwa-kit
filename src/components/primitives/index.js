import {
  width,
  space,
  fontSize,
  letterSpacing,
  lineHeight,
  color,
  flex,
  order,
  alignSelf,
  opacity,
  display,
  position,
  zIndex,
  top,
  right,
  left,
  bottom,
  minHeight,
  borderRadius,
  maxHeight,
  maxWidth,
  minWidth,
  borders,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
} from 'styled-system';
import styled from 'preact-emotion';

const Box = styled('div')`
${width};
${space};
${fontSize};
${letterSpacing};
${lineHeight};
${color};
${flex};
${order};
${alignSelf};
${opacity};
${display};
${position};
${zIndex};
${top};
${right};
${left};
${bottom};
${minHeight};
${borderRadius};
${maxHeight};
${maxWidth};
${minWidth};
${borders};
${order};
${flexWrap};
${flexDirection};
${alignItems};
${justifyContent};
`;
const Flex = styled(Box)`
display: flex;
`;
export { Box, Flex };
