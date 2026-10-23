export interface BitcoinHistoryResponce{
    id: string;
    symbol: string;
    name: string;
    image: {
        thumb: string;
        small: string;
    };
    market_data:{
        current_price:{
            usd: number;
            brl: number;
            eur: number;
            cny: number; //chinesa
        };
    };
};