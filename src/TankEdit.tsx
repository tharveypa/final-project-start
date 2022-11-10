import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Tank from "./interfaces/Tank";
import "./TankEdit.css";

interface tankEditProps {
    tank: Tank;
    swapEdit: () => void;
    editTank: (newTank: Tank) => void;
}

export const TankEdit = ({ tank, swapEdit, editTank }: tankEditProps) => {
    const [newTank, setNewTank] = useState<Tank>({
        ...tank
    });

    function saveChanges() {
        editTank(newTank);
    }
    return (
        <div>
            <div className="edit_header">
                <Form.Group controlId="formEditQuizId">
                    <div className="freshwater_flex">
                        <Form.Check
                            className="freshwater_check"
                            type="checkbox"
                            id="is-freshwater_check"
                            label="Freshwater"
                            data-testid="Tank Freshwater"
                            checked={!newTank.salt}
                            onChange={() => {
                                setNewTank({
                                    ...newTank,
                                    salt: !newTank.salt
                                });
                            }}
                        ></Form.Check>
                    </div>
                    <div className="predator_flex">
                        <Form.Check
                            className="predator_check"
                            type="checkbox"
                            id="is-predator_check"
                            label="Predator"
                            data-testid="Tank Freshwater"
                            checked={newTank.pred}
                            onChange={() => {
                                setNewTank({
                                    ...newTank,
                                    pred: !newTank.pred
                                });
                            }}
                        ></Form.Check>
                    </div>
                </Form.Group>
            </div>
            <div className="edit_footer">
                <div>
                    <Button
                        variant="success"
                        className="save_edit_btn"
                        onClick={() => {
                            saveChanges();
                            swapEdit();
                        }}
                    >
                        Save
                    </Button>
                    <Button variant="warning" onClick={swapEdit}>
                        Cancel
                    </Button>
                </div>
            </div>
        </div>
    );
};

/*
            <div>
                {newQuiz.questionList.map((q: Question, index: number) => (
                    <QuestionEdit
                        key={newQuiz.id + "|" + q.id}
                        index={index}
                        lastIndex={newQuiz.questionList.length - 1}
                        question={q}
                        editQuestion={editQuestion}
                        removeQuestion={removeQuestion}
                        swapQuestion={swapQuestion}
                    ></QuestionEdit>
                ))}
            </div>
            <hr />
            <div>
                <Button
                    className="add_question_button"
                    onClick={() => {
                        setNewQuiz({
                            ...newQuiz,
                            questionList: [
                                ...newQuiz.questionList,
                                {
                                    id: newQuiz.questionList.length,
                                    body: "Example Question",
                                    type: "short_answer_question",
                                    options: [],
                                    submission: "",
                                    expected: "Example Answer",
                                    points: 1,
                                    published: false
                                }
                            ]
                        });
                    }}
                >
                    Add Question
                </Button>
                <div className="edit_footer">
                    <div>
                        <Button
                            variant="success"
                            className="save_edit_btn"
                            onClick={() => {
                                saveChanges();
                                switchEdit();
                            }}
                        >
                            Save
                        </Button>
                        <Button variant="warning" onClick={switchEdit}>
                            Cancel
                        </Button>
                    </div>
                    <Button
                        variant="danger"
                        onClick={() => {
                            deleteQuiz(quiz.id);
                            resetView();
                        }}
                    >
                        Delete Quiz
                    </Button>
                </div>
            </div>
        </div>
*/
