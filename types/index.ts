export interface Step{
    number: number;
    title: string;
    description: string;
}

export interface Benefit{
    id: string;
    title: string;
    description: string;
}

export interface PricingPlan{
    price: number;
    currency: string;
    period: string;
    oldPrice?: number;
    features: string[];
}

export interface DemoCard{
    propertyCode: string;
    building: string;
    qrText: string;
}