import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <p className={css.message}>
      Something went wrong. Try to donate to Ukrainian soldiers and refresh the
      page
    </p>
  );
}
