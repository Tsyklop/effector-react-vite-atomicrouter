import { createEffect, createEvent, sample } from "effector";
import { toast } from "react-toastify";

const options = {};

export const showToast = createEvent();

const showToastFx = createEffect(({ type, message }) => {
  if (type) {
    toast[type](message, options);
  } else {
    toast(message, options);
  }
});

export const showErrorToast = showToastFx.prepend((message) => {
  return {
    type: "error",
    message,
  };
});
export const showSuccessToast = showToastFx.prepend((message) => {
  return {
    type: "success",
    message,
  };
});

sample({
  clock: showToast,
  target: showToastFx,
});
