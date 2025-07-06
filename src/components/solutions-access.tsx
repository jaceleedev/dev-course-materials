"use client";

import { useState, useEffect } from "react";

interface SolutionsAccessProps {
  children: React.ReactNode;
}

const TEACHER_PASSWORD = "koreaitacademy3836"; // 간단한 비밀번호
const STORAGE_KEY = "solutions_access";

export default function SolutionsAccess({ children }: SolutionsAccessProps) {
  const [hasAccess, setHasAccess] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 브라우저에서만 실행
    const storedAccess = localStorage.getItem(STORAGE_KEY);
    if (storedAccess === "true") {
      setHasAccess(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === TEACHER_PASSWORD) {
      setHasAccess(true);
      localStorage.setItem(STORAGE_KEY, "true");
      setError("");
    } else {
      setError("비밀번호가 틀렸습니다.");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setHasAccess(false);
    localStorage.removeItem(STORAGE_KEY);
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!hasAccess) {
    return (
      <div className="h-[calc(100vh-268px)] flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              🔒 강사 전용 답안 모음
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              답안을 확인하려면 비밀번호를 입력하세요
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="password" className="sr-only">
                비밀번호
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="비밀번호"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                답안 확인하기
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-blue-400">👨‍🏫</span>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                강사 모드로 접속 중입니다. 답안을 확인할 수 있습니다.
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            로그아웃
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
