import React from "react";
import "src/components/UserEnters/UserEnter.css"; // Importa el archivo de estilos CSS para el footer
import hackLogo from "src/icons/hackIcon.png";
import { Link } from "react-router-dom";

const LinkAccounts = () => {
  return (
    <div className="The-Boxy">
      <section className="Superior-Part">
        <div className="ImgContainer">
          <img className="p-5 KeImage" src={hackLogo} alt="" />
        </div>

        <div className="Title">
          <h1>Benvingut/da!</h1>
        </div>
        <Link to="/login">
          <button className="buttoner">Inicia sessió</button>
        </Link>
      </section>

      <div className="separator"> o també </div>

      <section className="Inferior-Part">
        <p>Crea un compte</p>
        <br />
        <div className="GridContainer">
          <div className="columna">
            <div className="iconContainer">
              <svg
                width="55"
                height="80"
                viewBox="0 0 55 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41.3522 41.9716C47.1637 37.784 50.1117 33.0087 50.1117 27.7124C50.1117 15.6102 38.9564 0 27.1075 0C15.2586 0 4.10327 15.6102 4.10327 27.7124C4.10327 34.0646 8.53519 38.8597 12.7975 42.0032C9.06688 43.5833 5.88342 46.2252 3.6433 49.6002C1.40318 52.9753 0.205297 56.9343 0.198739 60.9848V69.1973C0.196131 70.7856 0.807804 72.3133 1.90586 73.4611L5.2473 76.9623C5.2473 77.011 5.23288 77.057 5.23288 77.1064C5.23379 77.8736 5.53903 78.609 6.08164 79.1515C6.62425 79.6939 7.35993 79.9991 8.12729 80H46.0877C46.855 79.9991 47.5907 79.6939 48.1333 79.1515C48.6759 78.609 48.9812 77.8736 48.9821 77.1064C48.9821 77.057 48.9697 77.011 48.9677 76.9623L52.3091 73.4611C53.4073 72.3134 54.0193 70.7856 54.0169 69.1973V60.9848C54.0107 56.9216 52.8059 52.9505 50.5531 49.5686C48.3004 46.1866 45.0999 43.544 41.3522 41.9716ZM33.2657 45.0807L33.1366 45.1418C33.0552 45.1806 32.9821 45.235 32.9217 45.3019C32.8612 45.3688 32.8145 45.447 32.7843 45.532C32.7541 45.617 32.7409 45.7071 32.7455 45.7971C32.7501 45.8872 32.7724 45.9755 32.8111 46.0569C32.8499 46.1384 32.9043 46.2114 32.9712 46.2719C33.0382 46.3323 33.1164 46.379 33.2014 46.4092C33.2864 46.4394 33.3765 46.4526 33.4666 46.448C33.5567 46.4434 33.645 46.4211 33.7265 46.3823L33.8542 46.3212C35.9743 45.3265 38.0232 44.1867 39.9864 42.9101C42.5866 43.8606 44.9519 45.359 46.922 47.3036C46.6524 47.2169 46.3715 47.1706 46.0884 47.1663H29.1731C31.0189 45.6732 33.6839 43.1085 33.8659 40.6515C36.6841 39.3567 39.0722 37.2818 40.7475 34.6723C42.4228 32.0629 43.3152 29.0282 43.3189 25.9275V25.5019C45.1459 27.3384 46.7541 29.3801 48.1113 31.5863C46.4557 36.6547 41.4882 41.1808 33.2657 45.0807ZM18.2491 30.7097C19.8863 31.2582 21.66 31.243 23.2874 30.6664L25.6579 29.8255C26.5975 29.4925 27.623 29.4925 28.5626 29.8255L30.9303 30.6644C32.5578 31.2409 34.3314 31.2562 35.9686 30.7076L41.6654 28.7998C41.0013 32.1718 39.1866 35.2086 36.5314 37.3914C33.8762 39.5742 30.5451 40.7675 27.1075 40.7675C23.6698 40.7675 20.3388 39.5742 17.6836 37.3914C15.0284 35.2086 13.2137 32.1718 12.5496 28.7998L18.2491 30.7097ZM12.8243 23.7136C17.1999 20.0065 22.2711 17.8489 27.1109 17.8489C31.9507 17.8489 37.0247 20.0093 41.401 23.715L35.6589 22.0674C34.2146 21.6541 32.6812 21.6706 31.2462 22.1147L28.3964 22.9969C27.5591 23.2564 26.6628 23.2564 25.8254 22.9969L22.9715 22.1175C21.5367 21.6733 20.0035 21.6569 18.5595 22.0701L12.8243 23.7136ZM27.1075 42.1336C28.8949 42.1339 30.6699 41.8372 32.36 41.2556C31.6582 43.3892 28.691 45.8812 27.1075 47.0167C25.5226 45.8819 22.5554 43.392 21.8543 41.2556C23.5447 41.8369 25.3199 42.1336 27.1075 42.1336ZM27.1075 1.37299C38.2491 1.37299 48.7383 16.2095 48.7383 27.709C48.7341 28.3904 48.6739 29.0702 48.5584 29.7417C43.1349 21.6369 34.8671 16.4759 27.1075 16.4759C19.3479 16.4759 11.078 21.6404 5.65451 29.7472C5.53665 29.0753 5.47714 28.3945 5.47666 27.7124C5.47666 16.2095 15.9659 1.37299 27.1075 1.37299ZM14.1407 42.9409C16.1541 44.2945 18.2926 45.4522 20.5269 46.3981C20.696 46.4659 20.8851 46.4637 21.0526 46.392C21.22 46.3204 21.3522 46.1852 21.4199 46.0161C21.4877 45.847 21.4855 45.658 21.4138 45.4906C21.3422 45.3232 21.2069 45.191 21.0378 45.1233C20.9005 45.0691 9.03304 40.2087 6.11803 31.5616C7.47187 29.3652 9.07468 27.3323 10.8947 25.5033V25.9275C10.8984 29.0285 11.7909 32.0634 13.4665 34.673C15.142 37.2826 17.5305 39.3575 20.3491 40.6522C20.531 43.1091 23.1961 45.6739 25.0419 47.167H8.12729C7.8439 47.171 7.56268 47.2173 7.29296 47.3043C9.24049 45.3812 11.5746 43.8939 14.1407 42.9409ZM2.90019 72.5138C2.04607 71.621 1.57023 70.4327 1.57212 69.1973V60.9848C1.56911 56.9116 2.8657 52.9436 5.2734 49.6576C5.25046 49.7915 5.23692 49.9269 5.23288 50.0626V72.6957C5.23357 73.1179 5.32763 73.5346 5.50832 73.9162C5.689 74.2978 5.95185 74.6347 6.27803 74.9028C6.07038 75.0712 5.88712 75.2675 5.73348 75.4863L2.90019 72.5138ZM46.0877 78.6284H8.12729C7.72389 78.6284 7.33701 78.4682 7.05177 78.183C6.76652 77.8979 6.60627 77.5111 6.60627 77.1078C6.60627 76.7045 6.76652 76.3177 7.05177 76.0326C7.33701 75.7474 7.72389 75.5872 8.12729 75.5872H46.0877C46.4911 75.5872 46.8779 75.7474 47.1632 76.0326C47.4484 76.3177 47.6087 76.7045 47.6087 77.1078C47.6087 77.5111 47.4484 77.8979 47.1632 78.183C46.8779 78.4682 46.4911 78.6284 46.0877 78.6284ZM52.6435 69.1973C52.6455 70.4328 52.1694 71.6213 51.3148 72.5138L48.4815 75.4842C48.3276 75.2656 48.1444 75.0693 47.9369 74.9007C48.263 74.6325 48.5258 74.2956 48.7064 73.914C48.8871 73.5325 48.9812 73.1158 48.9821 72.6936V69.879C48.9821 69.6969 48.9097 69.5223 48.7809 69.3936C48.6522 69.2648 48.4775 69.1925 48.2954 69.1925C48.1133 69.1925 47.9386 69.2648 47.8098 69.3936C47.681 69.5223 47.6087 69.6969 47.6087 69.879V72.6936C47.6082 73.0968 47.4477 73.4832 47.1626 73.7682C46.8775 74.0533 46.4909 74.2137 46.0877 74.2142H8.12729C7.724 74.2139 7.33734 74.0535 7.05217 73.7685C6.767 73.4834 6.60663 73.0968 6.60627 72.6936V50.0606C6.60663 49.6574 6.767 49.2709 7.05217 48.9858C7.33734 48.7007 7.724 48.5404 8.12729 48.54H46.0877C46.4909 48.5405 46.8775 48.7009 47.1626 48.986C47.4477 49.271 47.6082 49.6575 47.6087 50.0606V60.691C47.6087 60.873 47.681 61.0476 47.8098 61.1764C47.9386 61.3051 48.1133 61.3775 48.2954 61.3775C48.4775 61.3775 48.6522 61.3051 48.7809 61.1764C48.9097 61.0476 48.9821 60.873 48.9821 60.691V50.0606C48.9781 49.9248 48.9644 49.7894 48.9409 49.6556C51.3489 52.9414 52.6459 56.9094 52.6435 60.9827V69.1973Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
            <Link to="/sign-up">
              <button className="buttoner">Hacker</button>
            </Link>
          </div>

          {/*<div className="columna">
                    <div className="iconContainer">
                        <svg width="83" height="80" viewBox="0 0 83 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6457 4.11426H7.17442C6.44441 4.11426 5.85254 4.70613 5.85254 5.43613C5.85254 6.16614 6.44441 6.75801 7.17442 6.75801H13.6457C14.3757 6.75801 14.9675 6.16614 14.9675 5.43613C14.9675 4.70613 14.3757 4.11426 13.6457 4.11426Z" fill="#F5F5F5"/>
                            <path d="M45.2987 6.67448C46.1211 6.67448 46.7878 6.00779 46.7878 5.18538C46.7878 4.36298 46.1211 3.69629 45.2987 3.69629C44.4763 3.69629 43.8096 4.36298 43.8096 5.18538C43.8096 6.00779 44.4763 6.67448 45.2987 6.67448Z" fill="#F5F5F5"/>
                            <path d="M50.7494 6.67448C51.5718 6.67448 52.2384 6.00779 52.2384 5.18538C52.2384 4.36298 51.5718 3.69629 50.7494 3.69629C49.9269 3.69629 49.2603 4.36298 49.2603 5.18538C49.2603 6.00779 49.9269 6.67448 50.7494 6.67448Z" fill="#F5F5F5"/>
                            <path d="M7.64024 39.7559C6.9132 39.7559 6.31836 40.3474 6.31836 41.0777V46.6957C6.31836 47.426 6.9132 48.0176 7.64024 48.0176C8.37057 48.0176 8.96211 47.426 8.96211 46.6957V41.0777C8.96211 40.3474 8.37057 39.7559 7.64024 39.7559Z" fill="#F5F5F5"/>
                            <path d="M7.64024 33.4502C6.9132 33.4502 6.31836 34.0417 6.31836 34.7721V36.1204C6.31836 36.8507 6.9132 37.4423 7.64024 37.4423C8.37057 37.4423 8.96211 36.8507 8.96211 36.1204V34.7721C8.96211 34.0417 8.37057 33.4502 7.64024 33.4502Z" fill="#F5F5F5"/>
                            <path d="M81.0706 30.6114H56.5861V8.91606V3.60542C56.5861 1.616 54.9701 0 52.9807 0C51.5921 0 7.328 0 4.21333 0C2.2239 0 0.60791 1.616 0.60791 3.60542V50.0066C0.60791 51.996 2.2239 53.6153 4.21333 53.6153H45.6277V78.6781C45.6277 79.4085 46.2193 80 46.9496 80H77.5213C78.2484 80 78.8432 79.4085 78.8432 78.6781V38.9954H81.0706C81.8009 38.9954 82.3924 38.4038 82.3924 37.6735V31.9332C82.3924 31.2029 81.8009 30.6114 81.0706 30.6114ZM52.9807 2.64375C53.5127 2.64375 53.9423 3.07336 53.9423 3.60542V7.59418H23.2087C22.8848 7.59418 22.5841 7.45208 22.3825 7.20093L18.7143 2.64375H52.9807ZM45.6277 50.9716H4.21333C3.68127 50.9716 3.25166 50.5387 3.25166 50.0066V3.60542C3.25166 3.07336 3.68127 2.64375 4.21333 2.64375H15.3204L20.3237 8.85988C21.0309 9.73563 22.0818 10.2379 23.2087 10.2379H53.9423V30.6114H43.3971C42.67 30.6114 42.0752 31.2029 42.0752 31.9332V37.6735C42.0752 38.4038 42.67 38.9954 43.3971 38.9954H45.6277V50.9716ZM76.1995 77.3562H48.2715C48.2715 73.2753 48.2715 43.4012 48.2715 38.9954C51.6277 38.9954 72.9989 38.9954 76.1995 38.9954V77.3562ZM79.7487 36.3516C76.2206 36.3516 48.4635 36.3516 44.719 36.3516V33.2551C48.0319 33.2551 76.4212 33.2551 79.7487 33.2551V36.3516Z" fill="#F5F5F5"/>
                            <path d="M51.6456 54.5407H55.9946C56.7249 54.5407 57.3165 53.9492 57.3165 53.2189V43.9459C57.3165 43.205 56.711 42.624 55.9946 42.624C54.5167 42.624 53.3859 42.624 51.6456 42.624C50.9153 42.624 50.3237 43.2156 50.3237 43.9459C50.3237 49.433 50.3237 51.0262 50.3237 51.4241C50.3237 51.511 50.3237 51.5411 50.3237 51.5421C50.3237 51.7318 50.3237 52.1928 50.3237 53.2192C50.3237 53.9614 50.9272 54.5407 51.6456 54.5407ZM52.9675 45.2678C53.9258 45.2678 53.7193 45.2678 54.6727 45.2678V51.897H52.9675C52.9675 49.5084 52.9675 47.7661 52.9675 45.2678Z" fill="#F5F5F5"/>
                            <path d="M60.0626 54.5407H64.4083C65.1386 54.5407 65.7302 53.9492 65.7302 53.2189V43.9459C65.7302 43.2156 65.1386 42.624 64.4083 42.624H60.0626C59.3323 42.624 58.7407 43.2156 58.7407 43.9459V53.2189C58.7407 53.9492 59.3323 54.5407 60.0626 54.5407ZM61.3845 45.2678H63.0864V51.897H61.3845V45.2678Z" fill="#F5F5F5"/>
                            <path d="M68.4767 54.5407H72.8256C73.556 54.5407 74.1475 53.9492 74.1475 53.2189V43.9459C74.1475 43.2156 73.556 42.624 72.8256 42.624H68.4767C67.7463 42.624 67.1548 43.2156 67.1548 43.9459V53.2189C67.1548 53.9492 67.7463 54.5407 68.4767 54.5407ZM69.7985 45.2678H71.5038V51.897H69.7985V45.2678Z" fill="#F5F5F5"/>
                            <path d="M51.6456 70.089H55.9946C56.7249 70.089 57.3165 69.4974 57.3165 68.7671V59.4908C57.3165 58.7605 56.7249 58.1689 55.9946 58.1689H51.6456C50.9153 58.1689 50.3237 58.7605 50.3237 59.4908V68.7671C50.3237 69.4974 50.9153 70.089 51.6456 70.089ZM52.9675 60.8127H54.6727V67.4452H52.9675V60.8127Z" fill="#F5F5F5"/>
                            <path d="M60.0626 70.089H64.4083C65.1386 70.089 65.7302 69.4974 65.7302 68.7671V59.4908C65.7302 58.7605 65.1386 58.1689 64.4083 58.1689H60.0626C59.3323 58.1689 58.7407 58.7605 58.7407 59.4908V68.7671C58.7407 69.4974 59.3323 70.089 60.0626 70.089ZM61.3845 60.8127H63.0864V67.4452H61.3845V60.8127Z" fill="#F5F5F5"/>
                            <path d="M68.4767 70.089H72.8256C73.556 70.089 74.1475 69.4974 74.1475 68.7671V59.4908C74.1475 58.7605 73.556 58.1689 72.8256 58.1689H68.4767C67.7463 58.1689 67.1548 58.7605 67.1548 59.4908V68.7671C67.1548 69.4974 67.7463 70.089 68.4767 70.089ZM69.7985 60.8127H71.5038V67.4452H69.7985V60.8127Z" fill="#F5F5F5"/>
                            <path d="M36.2392 15.9152C33.8129 15.7236 31.6983 17.5421 31.5069 19.9701L30.7766 29.4645C29.4263 28.6938 27.769 28.6932 26.4177 29.4645L25.6874 19.9701C25.4977 17.5577 23.4048 15.7285 20.955 15.9152C18.5327 16.1003 16.7151 18.2252 16.9002 20.6476L18.5228 41.7447C18.838 45.8511 24.1599 47.3168 26.5267 43.9357L28.5988 40.9747L30.6675 43.9357C33.0363 47.3088 38.3556 45.8591 38.6715 41.7447L40.2941 20.6476C40.4792 18.2252 38.6616 16.1003 36.2392 15.9152ZM37.6569 20.4427L36.0343 41.5431C35.9091 43.1928 33.7782 43.7626 32.8354 42.4189L29.6794 37.9113C29.1467 37.1585 28.041 37.1677 27.5148 37.9113L24.3589 42.4189C23.4183 43.7705 21.2848 43.1899 21.1599 41.5431L19.5373 20.4427C19.4613 19.4744 20.1883 18.6251 21.1599 18.5491C22.1652 18.4783 22.9775 19.2331 23.0502 20.1717L24.0119 32.6832C24.1067 33.9096 25.7026 34.3574 26.4144 33.3376C27.0975 32.3647 27.4818 31.5299 28.5988 31.5299C30.5753 31.5299 30.3942 34.3478 32.2141 33.8564C32.7528 33.7077 33.1394 33.2384 33.1824 32.6832L34.1441 20.1717C34.2181 19.2179 35.0479 18.476 36.0376 18.5524C37.0059 18.6251 37.733 19.4744 37.6569 20.4427Z" fill="#F5F5F5"/>
                        </svg>

                    </div>
                    <Link to="/sponsor">
                        <button className="buttoner">
                            Empresa
                        </button>
                    </Link>
                </div>*/}
          {
            //TODO: Veure si s'acaba necesitant o no i si no es necesita, borrar-ho
          }
          {/* <div className="columna">
            <div className="iconContainer">
              <svg
                width="81"
                height="80"
                viewBox="0 0 81 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M57.992 60.8002H22.792V43.2002C22.792 38.789 26.3808 35.2002 30.792 35.2002H36.4979L40.392 41.6904L44.2861 35.2002H52.1411L57.5235 29.8181C57.8256 29.516 57.992 29.1138 57.992 28.6866V19.2002H70.792V31.3375C70.792 33.4744 69.9597 35.4834 68.4489 36.9944L57.992 47.4511V60.8002ZM25.992 57.6002H54.792V46.1256L66.1859 34.732C67.0925 33.8252 67.592 32.6197 67.592 31.3378V22.4002H61.192V28.6866C61.192 29.9685 60.6928 31.1736 59.7866 32.0802L53.4666 38.4002H46.0979L40.392 47.9103L34.6861 38.4002H30.792C28.1453 38.4002 25.992 40.5535 25.992 43.2002V57.6002Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M41.992 49.6006H38.792V59.2006H41.992V49.6006Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M40.3921 51.4662L30.4004 45.4713L34.1063 36.2061L37.0778 37.3945L34.3838 44.1293L40.3921 47.7344L46.4004 44.1293L43.7063 37.3945L46.6778 36.2061L50.3838 45.4713L40.3921 51.4662Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M40.3924 32.0006C34.2167 32.0006 29.1924 26.9763 29.1924 20.8006C29.1924 14.6249 34.2167 9.60059 40.3924 9.60059C46.5681 9.60059 51.5924 14.6249 51.5924 20.8006C51.5924 26.9763 46.5681 32.0006 40.3924 32.0006ZM40.3924 12.8006C35.9812 12.8006 32.3924 16.3894 32.3924 20.8006C32.3924 25.2118 35.9812 28.8006 40.3924 28.8006C44.8036 28.8006 48.3924 25.2118 48.3924 20.8006C48.3924 16.3894 44.8036 12.8006 40.3924 12.8006Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M29.1921 80H0.39209V72C0.39209 67.5888 3.98089 64 8.39209 64H10.6548L14.7921 68.1373L18.9294 64H21.1921C25.6033 64 29.1921 67.5888 29.1921 72V80ZM3.59209 76.8H25.9921V72C25.9921 69.3533 23.8388 67.2 21.1921 67.2H20.2548L14.7921 72.6627L9.32937 67.2H8.39209C5.74537 67.2 3.59209 69.3533 3.59209 72V76.8Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M14.792 60.7998C10.3808 60.7998 6.79199 57.211 6.79199 52.7998C6.79199 48.3886 10.3808 44.7998 14.792 44.7998C19.2032 44.7998 22.792 48.3886 22.792 52.7998C22.792 57.211 19.2032 60.7998 14.792 60.7998ZM14.792 47.9998C12.1453 47.9998 9.99199 50.1531 9.99199 52.7998C9.99199 55.4465 12.1453 57.5998 14.792 57.5998C17.4387 57.5998 19.592 55.4465 19.592 52.7998C19.592 50.1531 17.4387 47.9998 14.792 47.9998Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M80.3918 80H51.5918V72C51.5918 67.5888 55.1806 64 59.5918 64H61.8545L65.9918 68.1373L70.1291 64H72.3918C76.803 64 80.3918 67.5888 80.3918 72V80ZM54.7918 76.8H77.1918V72C77.1918 69.3533 75.0385 67.2 72.3918 67.2H71.4545L65.9918 72.6627L60.5291 67.2H59.5918C56.9451 67.2 54.7918 69.3533 54.7918 72V76.8Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M65.9922 60.7998C61.581 60.7998 57.9922 57.211 57.9922 52.7998C57.9922 48.3886 61.581 44.7998 65.9922 44.7998C70.4034 44.7998 73.9922 48.3886 73.9922 52.7998C73.9922 57.211 70.4034 60.7998 65.9922 60.7998ZM65.9922 47.9998C63.3455 47.9998 61.1922 50.1531 61.1922 52.7998C61.1922 55.4465 63.3455 57.5998 65.9922 57.5998C68.6389 57.5998 70.7922 55.4465 70.7922 52.7998C70.7922 50.1531 68.6389 47.9998 65.9922 47.9998Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M80.3922 16H57.9922V0H80.3922V16ZM61.1922 12.8H77.1922V3.2H61.1922V12.8Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M61.1922 11.2002H57.9922V20.8002H61.1922V11.2002Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M41.992 65.6006H38.792V78.4006H41.992V65.6006Z"
                  fill="#F5F5F5"
                />
                <path
                  d="M53.1918 76.7998H27.5918V79.9998H53.1918V76.7998Z"
                  fill="#F5F5F5"
                />
              </svg>
            </div>
            <Link to="/sign-up/lleidahack">
              <button className="buttoner">Organitzador</button>
            </Link>
          </div>
*/}
        </div>
      </section>
    </div>
  );
};

export default LinkAccounts;
