import './MyButton.css'


// Declare type of count and onClick above
type MyButtonProps = {
  count: number;
  name: string;
  onClick: () => void;
}

export default function MyButton({ count, name, onClick }: MyButtonProps) {
  return (
    <button className="my-button" onClick={onClick}>
      {name}
    </button>
  )
}
