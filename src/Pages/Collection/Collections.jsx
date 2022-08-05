import React from "react";
import { TabTitle, Path } from "../../Components/Common/CommonFunction";
import { useNavigate } from "react-router-dom";
import "./collection.css";

const Collection = ({ path }) => {
  const redirect = useNavigate();
  TabTitle(path);

  const Teams = [
    `AC Milan`,
    `Arsenal`,
    `Barcelona`,
    `Bayern Munich`,
    `Chelsea`,
    `Inter Milan`,
    `Juventus`,
    `Liverpool`,
    `Manchester City`,
    `Manchester United`,
    `PSG`,
    `Tottenham Hotspur`,
  ];

  const Redirect = ((p)=>{
    let modulate_path = p.toLowerCase().split(' ').join('-');
    redirect(`${modulate_path}`)
  })

  return (
    <>
      <Path path={path} />
      <div className="collection_outer flex js ac">
        {Teams.map((i, index) => (
          <div
            className="card_out flex jsb ac"
            key={index}
            onClick={() => {
              Redirect(`/collections/${i}`);
            }}
          >
            <div className="card">
              <img
                src={`../Images/Shirts/${i} Home Kit.webp`}
                alt=""
                data-aos="zoom-out"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1100"
              />
              <div className="card_data flex">
                <div className="navigation flex">
                  <h3 className="timeline_underline">{i}</h3>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Collection;
