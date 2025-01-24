const GoogleMap = () => {
    return (
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.531063210397!2d-53.76142002359573!3d-20.44336998106348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9484372513e73d59%3A0x9864382b2696a935!2sPortal%20tintas!5e0!3m2!1spt-BR!2sbr!4v1737658050297!5m2!1spt-BR!2sbr"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    );
  };
  
  export default GoogleMap;
  