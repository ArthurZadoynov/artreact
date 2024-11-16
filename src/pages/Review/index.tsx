import "./styles.css";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormType = {
  user_name: string;
  field: string;
};

type ReviewType = FormType & {
  date: string;
};

export const Review = () => {
  const [reviews, setReviews] = useState<ReviewType[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>();

  const loadReviews = () => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    const currentDate = new Date().toLocaleString();
    const newReview = { ...data, date: currentDate };

    // Обновляем состояние и сохраняем в localStorage
    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
    reset();
  };

  const deleteReview = (index: number) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));
  };

  return (
    <section className="review">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          {" "}
          <strong>Имя</strong>
          <input
            type="text"
            {...register("user_name", {
              required: { value: true, message: "Обязательное поле" },
              minLength: {
                value: 3,
                message: "В поле с именем должно быть не менее 3 символов",
              },
              maxLength: {
                value: 25,
                message: "В поле с именем должно быть не более 25 символов",
              },
            })}
          />
          {errors.user_name && <p>{errors.user_name.message}</p>}
        </label>

        <label>
          <textarea
            className="field"
            rows={10}
            cols={42}
            maxLength={1000}
            placeholder="Введите сообщение до 1000 символов"
            {...register("field", {
              required: { value: true, message: "Обязательное поле" },
              minLength: {
                value: 20,
                message: "Отзыв должен содержать не менее 20 символов",
              },
            })}
          ></textarea>
          {errors.field && <p>{errors.field.message}</p>}
        </label>

        <input type="submit" value="Оставить отзыв" />
      </form>

      {reviews.map((review, index) => (
        <div className="reviewBlock" key={index}>
          <p>
            <strong>Имя:</strong> {review.user_name}
          </p>
          <p>{review.field}</p>
          <p>
            <strong>Дата и время добавления:</strong> {review.date}
          </p>
          <button className="deleteBtn" onClick={() => deleteReview(index)}>
            &times;
          </button>
        </div>
      ))}
    </section>
  );
};
