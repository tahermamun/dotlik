import Text from '@/components/ui/typography/typography';
import Image from 'next/image';

const FoundationalPrinciples = () => {
    const data = [
        {
            id: 1,
            img: '/about/target.png',
            title: 'Passionate',
            description:
                'We are intensely enthusiastic about providing a superior experience.',
        },
        {
            id: 2,
            img: '/about/flag.png',
            title: 'Respectful',
            description:
                'We are polite and kind to one another, even when it gets tough.',
        },
        {
            id: 3,
            img: '/about/toffy.png',
            title: 'Ownership',
            description:
                'We are empowered to do our jobs and work towards a common goal.',
        },
        {
            id: 4,
            img: '/about/unnity.png',
            title: 'Unified',
            description:
                'We work as a team and trust each other to create a seamless experience.',
        },
    ];
    return (
        <section className="grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-4 gap-6 items-center md:grid-cols-2 p-2">
            {data?.map((card) => (
                <div key={card.id}>
                    <div className="space-y-3 border p-3 text-center lg:text-left md:text-left lg:border-none md:border-none ">
                        <Image
                            src={card?.img}
                            width={100}
                            height={100}
                            alt="card_image"
                            className="mx-auto md:mx-0 lg:mx-0"
                        />
                        <Text
                            text={card.title}
                            className="text-2xl font-bold"
                        />
                        <Text text={card?.description} tag="paragraph" />
                    </div>
                </div>
            ))}
        </section>
    );
};
export default FoundationalPrinciples;
