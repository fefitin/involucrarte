import Button from './Button';

export function Blocks({ children }) {
  return (
    <div className="blocks">
      <div className="blocks-container">{children}</div>
    </div>
  );
}

export function Block({ title, button, link, children }) {
  return (
    <div className="block">
      <h2>{title}</h2>
      <p>{children}</p>
      <Button href={link} label={button}></Button>
    </div>
  );
}
