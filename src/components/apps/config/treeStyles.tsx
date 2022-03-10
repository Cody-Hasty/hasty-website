import { SvgIconTypeMap, Theme } from '@material-ui/core';
import { OverridableComponent } from '@material-ui/core/OverridableComponent';
import { makeStyles } from '@material-ui/styles';
import { StyledTreeItem } from './treeFunctions';
import React from 'react';

export interface StylesPropsType {
    height: number;
    flexGrow: number;
    maxWidth: number;
}

export const useStyles = makeStyles<Theme, StylesPropsType>((theme: Theme) => ({
    root: props => ({ 
        height: props.height,
        flexGrow: props.flexGrow,
        maxWidth: props.maxWidth
    }),
}))

export interface StyledTreeItemProps {
    nodeId: string;
    labelText: string;
    labelIcon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    labelInfo?: string;
    color?: string;
    bgColor?: string;
    onClick?: () => void;
    children?: ReturnType<typeof StyledTreeItem>[];
}
/**
 * Values necessary to match Gmail's native folder structure
 * in terms of appearance
 */
const treeCSSStyle = {
    height: 240,
    flexGrow: 1,
    maxWidth: 250
};

/**
 * React hooks are normally used in purely functional react code.
 * However, I need / want to use a value provided by this function inside
 * a React class instead.
 * Takes a react hook function and passes it as a prop to a react class
 * 
 * @param Component the component to wrap
 * @returns 
 */
export default function withStyleHook<T = {}>(Component: typeof React.Component) {
    return function WrappedComponent(props: T) {
        const classes = useStyles(treeCSSStyle);
        return <Component {...props} classes={classes} />;
    }
}