import React from 'react';

const IntroSection = () => {
  const introData = [
    { title: "Volem aprendre", img: "https://estaticos-cdn.prensaiberica.es/clip/255b7d28-259a-41c4-91b4-02699cc3fc59_16-9-aspect-ratio_default_0.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
    { title: "Activitats", img: "https://estaticos-cdn.prensaiberica.es/clip/255b7d28-259a-41c4-91b4-02699cc3fc59_16-9-aspect-ratio_default_0.jpg", text: "Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue." },
    { title: "Esdeveniments", img: "https://estaticos-cdn.prensaiberica.es/clip/255b7d28-259a-41c4-91b4-02699cc3fc59_16-9-aspect-ratio_default_0.jpg", text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos." }
  ];

  return (
    <section className="mx-36 flex flex-col gap-24 mt-10">
      {introData.map((item, index) => (
        <div key={index} className="flex flex-col gap-6">
          <img src={item.img} alt={item.title} className="w-full h-auto object-cover rounded-sm shadow-sm" />
          
          <h2 className="font-mono font-black text-5xl uppercase tracking-tighter">{item.title}</h2>
          
          <p className="font-mono text-base text-justify tracking-tight">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default IntroSection;