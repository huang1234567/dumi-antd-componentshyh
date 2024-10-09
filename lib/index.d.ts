import Foo from './Foo';
import CusButton from './CusButton';
export { Foo, CusButton };
declare const _default: {
    Foo: ({ title }: {
        title: string;
    }) => import("react").JSX.Element;
    CusButton: typeof CusButton;
};
export default _default;
