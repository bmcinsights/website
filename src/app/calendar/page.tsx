import React from 'react';

const CalendarPage: React.FC = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center p-4'>
            <iframe 
                src="https://calendar.google.com/calendar/embed?src=thebmcinsights%40britishmodelcollege.edu.np&ctz=Asia%2FKathmandu&showPrint=0" 
                className='w-full h-full'
                style={{ border: 0 }}
            ></iframe>
        </div>
    );
};

export default CalendarPage;