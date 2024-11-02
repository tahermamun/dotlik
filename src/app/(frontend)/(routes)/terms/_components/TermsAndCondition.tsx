'use client';

import SectionTitleBtn from '@/components/ui/SectionTitleBtn';
import Text from '@/components/ui/typography/typography';
import React from 'react';

const TermsAndCondition = () => {
    return (
        <section className="my-10">
            <div className="text-center">
                <SectionTitleBtn
                    text="Terms & Conditions"
                    className="text-[#000000] bg-[#f5f5f5]"
                />
                <Text
                    tag="h1"
                    text="Terms & Conditions"
                    className="text-3xl lg:text-5xl mt-5 mb-3 font-extrabold"
                />
                <Text tag="heading" text="for Dotlick LLC" />
            </div>
            <div className="mt-10">
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Who we are"
                />
                <Text
                    tag="terms"
                    text="Suggested text: Our website address is: https://dotlik.vercel.app/"
                />
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Comments"
                />
                <Text
                    tag="terms"
                    text="Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment."
                />
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Media"
                />
                <Text
                    tag="terms"
                    text="Suggested text: If you submit images to the website, you should not use them in another website or directly on your site."
                />

                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Cookies"
                />
                <div>
                    <Text
                        tag="terms"
                        text="Suggested text: If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year."
                    />
                    <Text
                        tag="terms"
                        text="If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser. When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks."
                    />

                    <Text
                        tag="terms"
                        text="If you turn cookies off, some features will become unavailable."
                    />
                    <Text
                        tag="terms"
                        text="If you log out of your account, the login cookies will be removed."
                    />
                    <Text
                        tag="terms"
                        text="If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day."
                    />
                </div>
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Embedded content from other websites"
                />

                <div>
                    <Text
                        tag="terms"
                        text="Suggested text: Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website."
                    />
                    <Text
                        tag="terms"
                        text="These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website."
                    />
                </div>

                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Who we share your data with"
                />
                <Text
                    tag="terms"
                    text="Suggested text: If you request a password reset, your IP address will be included in the reset email."
                />

                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="How long we retain your data"
                />
                <div>
                    <Text
                        tag="terms"
                        text="Suggested text: If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue."
                    />

                    <Text
                        tag="terms"
                        text="For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information."
                    />
                </div>
                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="What rights you have over your data"
                />
                <Text
                    tag="terms"
                    text="Suggested text: If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes."
                />

                <Text
                    tag="heading"
                    className="font-semibold text-2xl md:text-[2rem] sm:mt-7 mt-4  mb-1 "
                    text="Where we send your data"
                />
                <Text
                    tag="terms"
                    text="Suggested text: Visitor comments may be checked through an automated spam detection service."
                />
            </div>
        </section>
    );
};

export default TermsAndCondition;
