import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface ModalProps {
  variant?: 'default' | 'blur' | 'overlay';
  withShadow?: boolean;
  rounded?: 'small' | 'medium' | 'large' | 'default';
}

type Ref = HTMLDivElement;

export type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  ModalProps;

const Modal = forwardRef<Ref, DivProps>((props, ref) => {
  const {
    className,
    variant = 'default',
    rounded = 'default',
    children,
    withShadow = false,
    ...rest
  } = props;

  const bodyRoundOptions = {
    default: clsx('rounded-none'),
    small: clsx('rounded-sm'),
    medium: clsx('rounded-md'),
    large: clsx('rounded-lg'),
  };

  const variantOptions = {
    default: clsx(
      `laptop:item-center desktop:item-center large:item-center  delay:100 pointer-events-auto  fixed  inset-0 z-30 h-full w-full   overflow-y-auto bg-transparent px-4  laptop:flex laptop:justify-center laptop:px-6 desktop:flex desktop:justify-center desktop:px-6  large:flex   large:justify-center large:px-6 `,
    ),
    overlay: clsx(
      `laptop:item-center desktop:item-center large:item-center  delay:100 pointer-events-auto  fixed inset-0 z-30 flex h-full w-full   overflow-y-auto dark:bg-[#00000059]  px-4   laptop:flex laptop:justify-center laptop:px-6 desktop:flex desktop:justify-center desktop:px-6  large:flex   large:justify-center  large:px-6 `,
    ),
    blur: clsx(
      `laptop:item-center desktop:item-center large:item-center  delay:100 pointer-events-auto fixed inset-0 z-30 h-full w-full overflow-y-auto bg-white/30   px-4   backdrop-blur-sm laptop:flex laptop:justify-center laptop:px-6 desktop:flex desktop:justify-center desktop:px-6  large:flex large:justify-center large:px-6 `,
    ),
  };

  const bodyModals = clsx(
    `z-40 h-fit rounded-lg bg-white large:absolute ${
      withShadow ? 'shadow-[0_8px_30px_rgb(0,0,0,0.12)]' : 'shadow-none'
    }`,
    bodyRoundOptions[rounded],
    className,
  );

  return (
    <div className={`${variantOptions[variant]}`} {...rest} ref={ref}>
      <div className={bodyModals}>{children}</div>
    </div>
  );
});

Modal.displayName = 'Modals';
export default Modal;
