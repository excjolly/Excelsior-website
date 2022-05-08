import React from 'react';
import { Helmet } from 'react-helmet';

const HtmlHead = ({ title, desc, kw, pathname }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={desc} />
			<meta name='keywords' content={kw} />
			<link rel='canonical' href={`https://getexcelsior.com${pathname}`} />
		</Helmet>
	);
};

HtmlHead.defaultProps = {
	title: 'Excelsior Online Learning',
	desc: 'We keep it simple- we focus on the things that really produce results. Keeping this in mind, we encourage you to AIM HIGHER. Excelsior is the best online Data Science institute in Delhi and best online Data Science institute in Bengaluru. Contact - info@getexcelsior.com',
	kw: 'Best Data Science Course, Machine Learning Courses, Best online Course in Delhi NCR, Best online course in Bengaluru, Specialization in Data Science for Finance, Specialization in Data Science for IT, Finance Data Science, Data Science for IT, Deep Learning, Python programming, Machine Learning, Data Analytics, Financial Analytics',
	pathname: window.location.pathname,
};

export default HtmlHead;
