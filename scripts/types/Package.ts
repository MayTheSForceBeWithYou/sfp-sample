interface Package {
    id?: string;
    name: string;
    description: string;
    path: string;
    type: 'Managed' | 'Unlocked';
    orgDependent: boolean;
}

export { Package };