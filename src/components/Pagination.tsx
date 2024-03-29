"use client"
import React from "react";
import { Button } from "./ui/button";
import { on } from "events";

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: Props) => {

    const maxPagesToShow = 4; // Número máximo de páginas para mostrar
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

    if (totalPages - startPage < maxPagesToShow - 1) {
        startPage = totalPages - maxPagesToShow + 1;
    }

    return (
        <div className="flex justify-center ">
            {currentPage > 1 && (
                <Button arial-label='Anterior'
                    variant="ghost"
                    onClick={() => onPageChange(currentPage - 1)}
                    className="text-gray-500 text-base "
                >
                    Anterior
                </Button>
            )}
            {pageNumbers.slice(startPage - 1, endPage).map((pageNumber) => (
                <Button
                    arial-label='Pagina'
                    variant="ghost"
                    key={pageNumber}
                    onClick={() => onPageChange(pageNumber)}
                    className={`${pageNumber === currentPage
                        ? "text-red-500 "
                        : "text-gray-500 "
                        }  text-lg py-2 rounded`}
                >
                    {pageNumber}
                </Button>
            ))}
            {currentPage < totalPages - 1 &&
                <>
                    <p className="text-lg px-0 my-0     text-gray-500 py-2 ">...</p>
                    <Button
                        variant="ghost"
                        arial-label='Ultima pagina'
                        onClick={() => onPageChange(totalPages)}
                        className="text-lg   text-red-500 py-2 px-4 mr-2"
                    >
                        {totalPages}
                    </Button>
                </>
            }
            {currentPage < totalPages && (
                <Button
                    arial-label='Siguiente'
                    variant="ghost"
                    onClick={() => onPageChange(currentPage + 1)}
                    className="text-gray-500  text-base  "
                >
                    Siguiente
                </Button>
            )}

        </div>
    );
};

export default Pagination;
