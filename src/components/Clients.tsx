import Image from "next/image";
import React from "react";
import styles from "../app/style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      {
        clients.map((client, index)=>(
          <div key={client.id} className="flex-1 sm:min-w-[192px] min-w-[120px]">
            <Image src={client.logo} alt="client logo" 
            className="sm:w-[190px] w-[100px] object-contain"/>
          </div>
        ))
      }
    </div>
  </section>
);

export default Clients;