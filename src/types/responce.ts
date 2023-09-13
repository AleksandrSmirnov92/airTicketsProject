export interface ResponceData {
  flights: {
    /*Перевозчик */
    carrier: {
      uid: "AF";
      captioПодпись: "Air France" /*Подпись */;
      airlineCode: "AF" /*Код авиакомпании */;
    };
    exchange: object /*Обмен... */;
    international: false /*Международный */;
    isTripartiteContractDiscountApplied: false /*Применяется ли скида по трехсторонниму соглашению */;
    legs: [
      /*Перелеты */
      {
        duration: 2000 /*Продолжительность */;
        segments: [] /*Из скольких частей состоит перелет в одну сторону,где первый эелемент это первая пересажка воторой вторая */;
      },
      { duration: 2000 /*Продолжительность */; segments: [] }
    ];
  };
}
