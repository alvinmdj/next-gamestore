import classNames from 'classnames';

interface ButtonTabProps {
  title: string;
  active: boolean;
  onClick: () => void;
};

const ButtonTab = (props: ButtonTabProps) => {
  const { title, active, onClick } = props;

  const btnClass = classNames({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });

  return (
    <button
      type='button'
      className={btnClass}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default ButtonTab;
