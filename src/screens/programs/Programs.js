import React from 'react';
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

const Program = () => {
    return (
        <div className='programsPage'>
            <h2 className='heading'>Heading</h2>
            <div className='features_list'>
                <h3 className='features_heading'>Features</h3>
                <div className="features_cards">
                    <Card className='features_card' title="Card title" bordered={false}>
                        <ul className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </ul>
                    </Card>
                    <Card className='features_card' title="Card title" bordered={false}>
                        <li className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </li>
                    </Card>
                    <Card className='features_card' title="Card title" bordered={false}>
                        <li className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </li>
                    </Card>
                    <Card className='features_card' title="Card title" bordered={false}>
                        <li className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </li>
                    </Card>
                    <Card className='features_card' title="Card title" bordered={false}>
                        <li className='card_list'>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                            <ul>lorem</ul>
                        </li>
                    </Card>
                </div>
            </div>
            <div className='programs_homework'>
                <div className='programs'>
                    <h3>Programs</h3>
                    <div className='programs_lists' >
                        <Link to="/programs/details">
                            <li className='programs_list'>
                                <ul>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                            </li>
                        </Link>
                        <Link to="/programs/details">
                            <li className='programs_list'>
                                <ul>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                            </li>
                        </Link>
                        <Link to="/programs/details">
                            <li className='programs_list'>
                                <ul>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                            </li>
                        </Link>
                        <Link to="/programs/details">
                            <li className='programs_list'>
                                <ul>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                            </li>
                        </Link>
                        <Link to="/programs/details">
                            <li className='programs_list'>
                                <ul>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                            </li>
                        </Link>
                        <Link to="/programs/details">
                            <li className='programs_list'>
                                <ul>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                                <ul className='programs_listdark'>lorem</ul>
                            </li>
                        </Link>
                    </div>
                </div>
                <div className='homework'>
                    <h3>Homework</h3>
                </div>
            </div>
            <div className='quizes_events'>
                <div className='quizes'>
                    <h3>List of Quizes</h3>
                    <div className='quizes_lists'>
                        <li className='quizes_list'>
                            <ul>lorem</ul>
                            <ul>ipsum</ul>
                        </li>
                        <li className='quizes_list'>
                            <ul>lorem</ul>
                            <ul>ipsum</ul>
                        </li>
                        <li className='quizes_list'>
                            <ul>lorem</ul>
                            <ul>ipsum</ul>
                        </li>
                    </div>
                </div>
                <div className='events'>
                    <h3>Events and webinars</h3>
                </div>
                <div className='notifications'>
                    <h3>Notifications</h3>
                    <li className='notifications_list'>
                        <ul>Lorem Ipsum is simply dummy text of the printing and typesetting</ul>
                        <ul>Lorem Ipsum is simply dummy text of the printing and typesetting</ul>
                        <ul>Lorem Ipsum is simply dummy text of the printing and typesetting</ul>
                        <ul>Lorem Ipsum is simply dummy text of the printing and typesetting</ul>
                        <ul>Lorem Ipsum is simply dummy text of the printing and typesetting</ul>
                    </li>
                </div>
            </div>
            <div className='mentor'>
                <h3>Mentor</h3>
                <div className='mentor_list'>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className='image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className='image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className='image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className='image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className='image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img className='image' alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="Europe Street beat" description="www.instagram.com" />
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Program;