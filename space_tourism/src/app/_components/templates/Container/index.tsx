import "@/app/_styles/components/templates/_container.scss";

interface ContainerProps {
  children: JSX.Element;
  title?: JSX.Element;
}

export const Container = (props: ContainerProps) => {
  return (
    <div className={"__container"}>
      {props.title}
      {props.children}
    </div>
  );
};
