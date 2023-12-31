/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TagUpdateFormInputValues = {
    tag?: string;
};
export declare type TagUpdateFormValidationValues = {
    tag?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TagUpdateFormOverridesProps = {
    TagUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tag?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TagUpdateFormProps = React.PropsWithChildren<{
    overrides?: TagUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tag?: any;
    onSubmit?: (fields: TagUpdateFormInputValues) => TagUpdateFormInputValues;
    onSuccess?: (fields: TagUpdateFormInputValues) => void;
    onError?: (fields: TagUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TagUpdateFormInputValues) => TagUpdateFormInputValues;
    onValidate?: TagUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TagUpdateForm(props: TagUpdateFormProps): React.ReactElement;
