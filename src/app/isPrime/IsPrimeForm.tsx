"use client";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment, useState } from "react";

const isPrime = (num: number) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

export const IsPrimeForm = () => {
  const { push } = useRouter();
  const params = useSearchParams();
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const searchParamNumberString = params.get("number");
  const searchParamNumberValue = searchParamNumberString
    ? Number(searchParamNumberString)
    : null;
  const isNumberPrime = searchParamNumberValue
    ? isPrime(searchParamNumberValue)
    : null;

  const isInputSet = Boolean(inputValue);

  return searchParamNumberValue ? (
    <Fragment>
      <h1 className="text-xl">
        <span className="font-semibold">{searchParamNumberValue}</span> is
        {isNumberPrime ? "" : " not"} a prime number.
      </h1>
      <Link
        href={"/isPrime"}
        className="text-lg hover:text-blue-600 hover:underline"
      >
        ← Back
      </Link>
    </Fragment>
  ) : (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputValue) {
          push(`/isPrime?number=${inputValue}`);
        }
      }}
    >
      <div>
        <label htmlFor="number">Enter a number:</label>
        <input
          id="number"
          type="number"
          name="number"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.currentTarget.value);
          }}
          className="border border-black ms-2"
        />
      </div>
      <button
        type="submit"
        disabled={!isInputSet}
        className="border text-white bg-green-600 rounded-lg disabled:bg-slate-400 disabled:text-slate-100"
      >
        Check
      </button>
    </form>
  );
};
