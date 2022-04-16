import classNames from 'classnames';
import Link from 'next/link';

interface ButtonTabProps {
  title: string;
  active: boolean;
}

const ButtonTab = (props: ButtonTabProps) => {
  const { title, active } = props;

  const btnClass = classNames({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <Link href='#'>
      <a data-filter='*' className={btnClass}>
        {title}
      </a>
    </Link>
  );
};

export default ButtonTab;