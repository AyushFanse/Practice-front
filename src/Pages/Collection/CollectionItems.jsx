import React from "react";
import { useParams } from "react-router-dom";
import { TabTitle, Path } from "../../Components/Common/CommonFunction";

function CollectionItems({ path }) {
  TabTitle(path);

  const { itemnames } = useParams();
  const product_name = itemnames.split('-').join(' ');
  console.log(product_name)

  return (
    <>
      <Path path={`Collection / ${product_name}`} />
      <div className="search_container_outter">
        <div className="search_inner">
          <div className="search_hearder">{product_name}</div>
          <div className="search_input_section flex js ac row">hello</div>
        </div>
      </div>
    </>
  );
}

export default CollectionItems;
