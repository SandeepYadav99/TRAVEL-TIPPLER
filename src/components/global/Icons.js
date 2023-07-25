export const IconHamburger = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width || 20}
      height={height || 20}
      x="0"
      y="0"
      viewBox="0 0 16 16"
    >
      <g xmlns="http://www.w3.org/2000/svg" id="_31" data-name="31">
        <path
          d="m15.5 4h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"
          fill={fill || "#ffffff"}
          data-original="#000000"
        ></path>
        <path
          d="m15.5 9h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"
          fill={fill || "#ffffff"}
          data-original="#000000"
        ></path>
        <path
          d="m15.5 14h-15a.5.5 0 0 1 0-1h15a.5.5 0 0 1 0 1z"
          fill={fill || "#ffffff"}
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};


export const IconSearch = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width={width || 24}
      height={height || 24}
      x="0"
      y="0"
      viewBox="0 0 192.904 192.904"
    >
      <g>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M190.707,180.101l-47.078-47.077c11.702-14.072,18.752-32.142,18.752-51.831C162.381,36.423,125.959,0,81.191,0  C36.422,0,0,36.423,0,81.193c0,44.767,36.422,81.187,81.191,81.187c19.688,0,37.759-7.049,51.831-18.751l47.079,47.078  c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.304-2.197C193.637,187.778,193.637,183.03,190.707,180.101z M15,81.193  C15,44.694,44.693,15,81.191,15c36.497,0,66.189,29.694,66.189,66.193c0,36.496-29.692,66.187-66.189,66.187  C44.693,147.38,15,117.689,15,81.193z"
          fill={fill || "#fff"}
          data-original="#000000"
        ></path>
      </g>
    </svg>
  );
};

export const IconClose = ({ width, height, fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 20.5}
      height={height || 20.5}
      viewBox="0 0 20.5 20.5"
    >
      <g id="Close" transform="translate(0.25 0.25)">
        <path
          id="Path_7779"
          data-name="Path 7779"
          d="M11.768,10l7.866-7.866A1.25,1.25,0,0,0,17.866.366h0L10,8.233,2.135.366A1.25,1.25,0,0,0,.366,2.135L8.233,10,.366,17.866a1.25,1.25,0,0,0,1.768,1.768L10,11.768l7.866,7.866a1.25,1.25,0,1,0,1.768-1.768Z"
          transform="translate(0 0)"
          fill={fill || "#fff"}
          stroke="#fff"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
};
