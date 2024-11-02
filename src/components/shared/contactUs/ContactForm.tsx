'use client';

import React from 'react';
import Text from '../../ui/typography/typography';
import { Separator } from '../../ui/separator';
import { Button } from '../../ui/button';

const ContactForm = () => {
    return (
        <div className="flex flex-col gap-5 md:p-10 max-md:pt-10">
            <div className="formUpper">
                <Text
                    tag="heading"
                    text="Contact a Consultation"
                    className="text-center font-bold "
                />
            </div>
            <Separator />

            <div className="mainForm">
                <form className="space-y-8">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <label className="flex-1 text-sm font-bold text-gray-700">
                            Name
                            <input className="w-full px-4 mt-[5px] mb-2 py-2 font-normal border rounded" />
                        </label>
                    </div>
                    <label className="flex-1 text-sm font-bold text-gray-700">
                        Company Email
                        <input
                            type="email"
                            className="w-full mt-[5px] mb-2 px-4 py-2 font-normal border rounded"
                        />
                    </label>

                    <label className="flex-1 text-sm font-bold text-gray-700">
                        Phone
                        <input
                            type="phone"
                            className="w-full mt-[5px] mb-2 px-4 py-2 font-normal border rounded"
                        />
                    </label>

                    <label className="flex-1 text-sm font-bold text-gray-700">
                        How Can We Help You?
                        <select
                            defaultValue={''}
                            className="bg-gray-50 mt-[5px] mb-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="" disabled>
                                Select Option
                            </option>
                            <option value="Managed Service">
                                Managed Service
                            </option>
                            <option value="IT Consulting & Advisory">
                                IT Consulting & Advisory
                            </option>
                            <option value="Cyber Security">
                                Cyber Security
                            </option>
                            <option value="Web Development">
                                Web Development
                            </option>
                            <option value="Mobile Development">
                                Mobile Development
                            </option>
                            <option value="Cloud Service">Cloud Service</option>
                            <option value="Other">other</option>
                        </select>
                    </label>

                    <label className="flex-1 text-sm font-bold text-gray-700">
                        Message
                        <textarea
                            className="w-full mt-[5px] mb-2 px-4 py-2 font-normal border rounded"
                            rows={4}
                            placeholder="To better assist you, please describe how we can help...."
                        />
                    </label>

                    <span>
                        <Button variant="default">Send Message</Button>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
