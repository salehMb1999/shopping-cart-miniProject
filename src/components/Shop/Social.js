const Social = (props) => {
  return (
    <li>
      <a href={props.href} rel="noreferrer" target="_blank">
        <img src={props.img} alt="img" />
      </a>
    </li>
  );
};
export default Social;
