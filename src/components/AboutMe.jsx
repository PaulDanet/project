import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function AboutMe() {
  useGSAP(() => {
    gsap.to(".path", {
      strokeDashoffset: 0,
      delay: 7,
      duration: 3,
      ease: "power1.inOut",
    });

    gsap.to(".pathBis", {
      strokeDashoffset: 0,
      delay: 9,
      duration: 2,
      ease: "power1.inOut",
    });

    gsap.to(".path, .pathBis", {
      fill: "black",
      duration: 1,
      delay: 10,
      ease: "power1.inOut",
    });
  });

  return (
    <>
      <div className="relative flex items-center justify-center">
        <img
          src="src/assets/profile-pic (2).png"
          className="profile-pic relative z-10 w-1/2 pt-24"
        ></img>
        <svg viewBox="0 0 200 200" className="absolute w-1/4 bottom-0 right-0">
          <path
            className="path"
            d="M412.525,368.426c8.893,7.495,20.374,8.551,31.57,8.509 c13.815-0.052,27.919,0.613,41.671-0.737c12.128-1.19,23.532-5.902,34.024-11.931c9.279-5.332,18.345-13.41,21.054-24.165 c4.481-17.792-19.082-23.916-32.048-23.194c-18.858,1.051-47.131,14.913-44.663,37.143 c2.067,18.626,13.855,36.13,26.971,48.908c6.823,6.649,14.266,12.885,21.546,19.029c7.447,6.285,15.516,11.851,24.716,15.212 c3.565,1.303,1.148-4.402-1.092-5.221c-13.479-4.924-23.98-15.342-34.508-24.695c-11.159-9.914-20.833-20.069-27.235-33.772 c-2.741-5.867-4.919-12.223-5.345-18.719c-0.477-7.273,2.89-12.796,8.032-17.57c8.558-7.946,20.217-12.845,31.652-14.634 c7.68-1.202,18.91-0.274,24.845,5.327c8.118,7.661-4.339,21.104-10.064,25.891c-9.328,7.797-21.97,13.325-33.788,15.925 c-14.195,3.123-29.33,1.328-43.756,1.678c-10.845,0.264-23.236,0.656-32.016-6.744 C410.767,361.863,410.023,366.317,412.525,368.426L412.525,368.426z"
            transform="translate(-380, -250)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />
          <path
            className="pathBis"
            d="M529.954,383.82c-7.977,17.847-2.468,34.132,5.54,50.804c0.187-0.67,0.373-1.341,0.561-2.011 c-21.178-5.355-45.592-13.839-64.246,2.365c-1.377,1.195,2.86,6.125,4.221,4.943c18.253-15.855,41.986-7.448,62.697-2.211 c1.428,0.361,0.893-1.32,0.561-2.011c-3.633-7.564-7.082-15.207-8.506-23.531c-1.421-8.305,0.365-16.435,3.755-24.019 C535.271,386.507,530.743,382.055,529.954,383.82L529.954,383.82z"
            transform="translate(-380, -250)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />
        </svg>
        <svg viewBox="0 0 200 200" className="absolute w-1/4 top-0 right-0">
          <path
            className="path"
            d="M620.461,679.183c13.67-16.527,29.66-30.946,43.9-46.955c-1.931-0.797-3.862-1.595-5.794-2.392 c0.754,23.411,0.143,47.127-1.374,70.498c-0.17,2.633,4.097,4.729,5.794,2.392c28.858-39.727,65.732-72.751,96.951-110.507 c2.393-2.894-3.028-6.404-5.242-3.727c-31.221,37.757-68.093,70.78-96.951,110.507c1.931,0.797,3.862,1.595,5.794,2.392 c1.516-23.372,2.127-47.088,1.374-70.498c-0.087-2.701-3.813-4.619-5.794-2.392c-14.241,16.009-30.23,30.429-43.9,46.955 C612.825,678.35,618.247,681.859,620.461,679.183L620.461,679.183z"
            transform="translate(-600, -500)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />
          <path
            className="pathBis"
            d="M685.49,618.059c26.861-5.358,58.058-10.271,77.578-31.391 c-1.405-1.469-2.81-2.938-4.214-4.407c-3.273,12.321-7.759,24.277-10.203,36.817c-2.887,14.808-2.03,29.829,2.272,44.268 c0.415,1.394,1.301,3.058,2.819,3.498c1.407,0.407,1.819-1.187,1.503-2.248c-4.245-14.248-4.734-28.516-1.896-43.074 c2.346-12.032,6.776-23.528,9.917-35.353c0.466-1.752-2.295-6.482-4.214-4.407c-18.984,20.542-49.857,25.219-75.945,30.424 C680.394,612.727,683.232,618.51,685.49,618.059L685.49,618.059z"
            transform="translate(-600, -500)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          className="absolute bottom-0 left-0 w-1/4 -rotate-[130deg]"
        >
          <path
            className="path"
            d="M230.656,466.23c-2.789-13.82,0.321-27.907,4.583-41.094 c4.424-13.688,10.793-26.735,17.386-39.488c13.21-25.556,30.394-51.061,57.202-63.636c2.946-1.382,3.37-5.796-0.568-3.948 c-28.013,13.14-46.686,38.864-60.705,65.625c-7.044,13.445-13.577,27.151-18.524,41.52 c-4.764,13.833-8.071,29.113-5.13,43.692C225.457,471.667,231.136,468.607,230.656,466.23L230.656,466.23z"
            transform="translate(-200, -300)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />

          <path
            className="pathBis"
            d="M239.455,340.613c24.403-7.974,50.667-9.877,73.762-21.727 c-1.605-1.276-3.21-2.551-4.814-3.827c-8.244,19.519-28.257,36.887-17.029,59.521c1.204,2.427,7.223,3.098,5.468-0.441 c-10.261-20.684,9.771-38.212,17.275-55.981c0.949-2.248-2.851-4.834-4.815-3.827c-23.095,11.851-49.359,13.753-73.762,21.727 C232.248,337.134,236.956,341.43,239.455,340.613L239.455,340.613z"
            transform="translate(-200, -300)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />
        </svg>
        <svg
          viewBox="0 0 200 200"
          className="absolute w-1/4 top-5 left-10 -rotate-[30deg]"
        >
          <path
            className="path"
            d="M304.137,191.499c-27.207,16.456-65.525-12.288-68.973-40.758 c-1.984-16.383,5.782-33.107,15.892-45.512c5.388-6.61,12.102-12.1,19.551-16.222c8.743-4.838,17.576-5.859,27.394-5.859 c3.559,0-1.272-3.952-3.133-3.952c-9.677,0-18.232,0.913-27.104,5.038c-8.789,4.087-16.268,10.669-22.483,18.014 c-11.551,13.649-19.536,33.717-15.049,51.655c7.396,29.568,50.087,58.724,79.117,41.165 C311.146,193.98,305.901,190.432,304.137,191.499L304.137,191.499z"
            transform="translate(-200, -50)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />

          <path
            className="pathBis"
            d="M253.698,57.298c2.358,6.832,11.807,10.581,17.857,13c3.663,1.465,7.449,2.931,11.303,3.795 c6.685,1.5,13.526,1.868,20.082,3.975c-1.439-1.422-2.879-2.845-4.319-4.267c-3.29,6.58-8.755,11.613-12.559,17.861 c-4.023,6.609-5.308,14.909-6.368,22.435c-0.217,1.544,4.916,4.745,5.059,3.729c1.14-8.091,2.747-16.185,7.047-23.251 c3.544-5.822,8.681-10.392,11.759-16.547c0.706-1.412-3.309-3.942-4.319-4.267c-7.795-2.505-16.141-2.479-23.891-5.058 c-2.945-0.98-5.862-2.036-8.729-3.226c-2.463-1.022-7.155-2.466-8.095-5.188C258.065,58.956,253.152,55.716,253.698,57.298 L253.698,57.298z"
            transform="translate(-200, -50)"
            stroke="black"
            fill="none"
            strokeWidth="1"
            strokeDasharray="800"
            strokeDashoffset="800"
          />
        </svg>
      </div>
    </>
  );
}
