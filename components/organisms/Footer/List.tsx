import Link from "next/link";

interface ListProps {
  label: string;
  href: string;
}

const List = (props: ListProps) => {
  const { label, href } = props;

  return (
    <li className='mb-6'>
      <Link href={href}>
        <a className='text-lg color-palette-1 text-decoration-none'>{label}</a>
      </Link>
    </li>
  );
};

export default List;