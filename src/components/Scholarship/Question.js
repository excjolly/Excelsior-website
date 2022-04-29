import { Card } from 'antd'
import React from 'react'

function Question() {
  return (
    <Card className="mb-3">
    <div className="d-flex flex-row align-content-center align-items-center mb-5">
      <div className="sw-5 me-4">
        <div className="sw-5 sh-5 text-primary d-flex justify-content-center align-items-center">
          1
        </div>
      </div>
      <div className="heading mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
        blanditiis illum est possimus culpa architecto adipisci.
        Explicabo modi ullam quo!
      </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_1" name="radioOutline1" />
            <label for="answer_1" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                A
            </label>

          </div>
        </div>
        <div className="mb-0 text-alternate">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
        </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_2" name="radioOutline1" />
            <label for="answer_2" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                B
            </label>
          </div>
        </div>
        <div className="mb-0 text-alternate">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
        </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_3" name="radioOutline1" />
            <label for="answer_3" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                C
            </label>
          </div>
        </div>
        <div className="mb-0 text-alternate">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
        </div>
    </div>
    <div className="d-flex flex-row align-content-center align-items-center position-relative mb-3">
        <div className="sw-5 me-4 d-flex justify-content-center flex-grow-0 flex-shrink-0">
          <div className="d-flex justify-content-center align-items-center">
            <input type={"radio"} className="btn-check" id="answer_4" name="radioOutline1" />
            <label for="answer_4" className="btn btn-foreground hover-outline sw-4 sh-4 p-0 rounded-xl d-flex justify-content-center align-items-center stretched-link">
                D
            </label>
          </div>
        </div>
        <div className="mb-0 text-alternate">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
        </div>
    </div>
  </Card>
  )
}

export default Question