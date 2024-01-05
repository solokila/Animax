import { getSize } from '@utils/responsive';
import { isNumber } from 'lodash';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { handleMargin, handlePadding, handleRound, handleSquare } from '../shared';
import styles from '@common/Box/styles';
import { colors } from '@themes/colors';

const Icon = ({
    size,
    source,
    resizeMode,
    tintColor ,
    flex,
    flexShrink,
    flexGrow,
    row,
    column,
    shadow,
    backgroundColor,
    space,
    padding,
    margin,
    alignStart,
    alignCenter,
    alignEnd,
    wrap,
    justifyCenter,
    justifyEnd,
    justifyStart,
    justifySpaceAround,
    justifySpaceBetween,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingVertical,
    paddingHorizontal,
    marginVertical,
    marginHorizontal,
    radius,
    square,
    round,
    borderWidth,
    relative,
    absolute,
    top,
    left,
    right,
    bottom,
    borderColor,
    children,
    overflow,
    alignSelf,
    style,
    shadowColor,
    opacity,
    elevation,
    maxWidth,
    maxHeight,
    borderTopWidth,
    borderRightWidth,
    borderBottomWidth,
    borderLeftWidth,
    isPaddingIos,
    isPaddingAdnroid,
    zIndex,
    borderTopLeftRadius,
    borderTopRightRadius,
    ...rest
}: Props) => {
    const insets = useSafeAreaInsets();

    const blockStyles = [
        isPaddingAdnroid && { paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 },
        isPaddingIos && {
            paddingBottom: Platform.OS === 'ios' ? insets.bottom : getSize.m(20),
        },
        flex && styles.block,
        flexShrink && styles.flexShrink,
        flexGrow && styles.flexGrow,
        !flex && { flex: 0 },
        maxWidth && { maxWidth },
        maxHeight && { maxHeight },
        size && { width: size },
        size && { height: size },
        row && styles.row,
        column && styles.column,
        shadow && {
            ...styles.shadow,
            shadowColor: shadowColor,
            elevation: elevation || 3,
        },
        wrap && { flexWrap: 'wrap' },
        backgroundColor && {
            backgroundColor: backgroundColor,
        },
        padding && { ...handlePadding(getSize.m(padding)) },
        margin && { ...handleMargin(getSize.m(margin)) },
        alignStart && styles.alignStart,
        alignCenter && styles.alignCenter,
        alignEnd && styles.alignEnd,
        tintColor && { tintColor },
        justifyCenter && styles.justifyCenter,
        justifyStart && styles.justifyStart,
        justifyEnd && styles.justifyEnd,
        justifySpaceAround && styles.justifySpaceAround,
        justifySpaceBetween && styles.justifySpaceBetween,
        space && { justifyContent: `space-${space}` },
        paddingTop && { paddingTop: getSize.m(paddingTop) },
        paddingRight && { paddingRight: getSize.m(paddingRight) },
        paddingBottom && { paddingBottom: getSize.m(paddingBottom) },
        paddingLeft && { paddingLeft: getSize.m(paddingLeft) },
        marginBottom && { marginBottom: getSize.m(marginBottom) },
        marginTop && { marginTop: getSize.m(marginTop) },
        marginRight && { marginRight: getSize.m(marginRight) },
        marginLeft && { marginLeft: getSize.m(marginLeft) },
        paddingHorizontal && { paddingHorizontal: getSize.m(paddingHorizontal) },
        paddingVertical && { paddingVertical: getSize.m(paddingVertical) },
        marginHorizontal && { marginHorizontal: getSize.m(marginHorizontal) },
        marginVertical && { marginVertical: getSize.m(marginVertical) },
        radius && { borderRadius: getSize.s(radius) },
        borderWidth && { borderWidth: borderWidth },
        square && { ...handleSquare(getSize.s(square)) },
        round && { ...handleRound(getSize.s(round)) },
        isNumber(opacity) && { opacity: opacity },
        borderColor && {
            borderColor: borderColor,
        },
        relative && { position: 'relative' },
        absolute && { position: 'absolute' },
        isNumber(top) && { top: getSize.v(top) },
        isNumber(left) && { left: getSize.s(left) },
        isNumber(right) && { right: getSize.s(right) },
        isNumber(bottom) && { bottom: getSize.v(bottom) },
        overflow && { overflow },
        alignSelf && { alignSelf },
        borderTopWidth && { borderTopWidth },
        borderRightWidth && { borderRightWidth },
        borderBottomWidth && { borderBottomWidth },
        borderLeftWidth && { borderLeftWidth },
        zIndex && { zIndex },
        borderTopLeftRadius && { borderTopLeftRadius },
        borderTopRightRadius && { borderTopRightRadius },
        { ...StyleSheet.flatten(style) },
    ];

    return (
        <Image
            source={source}
            resizeMode={resizeMode}
            style={blockStyles} {...rest} />
    );
};

export default React.memo(Icon);

interface Props {
    tintColor?: any,
    size?: any
    source?: any,
    resizeMode?: 'center' | 'contain' | 'cover' | 'repeat' | 'stretch',
    flex?: any,
    flexShrink?: any,
    flexGrow?: any,
    row?: any,
    column?: any,
    shadow?: any,
    backgroundColor?: any,
    space?: any,
    padding?: any,
    margin?: any,
    alignStart?: any,
    alignCenter?: any,
    alignEnd?: any,
    wrap?: any,
    justifyCenter?: any,
    justifyEnd?: any,
    justifyStart?: any,
    justifySpaceAround?: any,
    justifySpaceBetween?: any,
    paddingTop?: any,
    paddingBottom?: any,
    paddingLeft?: any,
    paddingRight?: any,
    marginBottom?: any,
    marginLeft?: any,
    marginRight?: any,
    marginTop?: any,
    paddingVertical?: any,
    paddingHorizontal?: any,
    marginVertical?: any,
    marginHorizontal?: any,
    radius?: any,
    height?: any,
    width?: any,
    square?: any,
    round?: any,
    borderWidth?: any,
    relative?: any,
    absolute?: any,
    top?: any,
    left?: any,
    right?: any,
    bottom?: any,
    borderColor?: any,
    children?: any,
    overflow?: any,
    alignSelf?: any,
    style?: any,
    shadowColor?: any,
    opacity?: any,
    elevation?: any,
    maxWidth?: any,
    maxHeight?: any,
    borderTopWidth?: any,
    borderRightWidth?: any,
    borderBottomWidth?: any,
    borderLeftWidth?: any,
    isPaddingIos?: any,
    isPaddingAdnroid?: any,
    zIndex?: any,
    borderTopLeftRadius?: any,
    borderTopRightRadius?: any,
}
