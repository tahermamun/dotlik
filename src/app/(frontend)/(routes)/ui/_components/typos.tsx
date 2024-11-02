'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Text from '@/components/ui/typography/typography';

const Typos = () => {
    return (
        <div>
            <Text
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, facere?"
                tag="h1"
            />
            <Text
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, facere?"
                tag="heading"
                className="text-3xl font-normal"
            />
            <Text
                text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis, facere?"
                tag="xs"
                className="uppercase font-bold"
            />

            <Button variant="default">Schedule Free Consultation</Button>
            <br />
            <br />

            <Button variant="secondary">Service</Button>

            <Separator className="my-5" />
        </div>
    );
};

export default Typos;
