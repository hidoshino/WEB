 
    This Component Created in 2021-05-31 ;
    Author Filipe Paiva (Hido)
    Simple component for control the organization in datasets (table, cards.. etc)

    Recomendations                             Usage
     Use in max 7 pages                         Declare variable with 
                                                    by id (dataset)
                                                    class paginationArea
                                                    set linesPerPages



function Pagination(table, pag_area, qtd_pages) {

    this.childsTable = document.querySelector(`#${table}`).childNodes;
    this.GetPagination = document.querySelector(`.${pag_area}`);
    this.CountFields = 0;
    this.lines = [];
    this.LinePerPage = qtd_pages;

    for (let index = 0; index  this.childsTable[3].childNodes.length; index++) {
        const find = this.childsTable[3].childNodes[index];
        if (find.nodeName == TR) {
            this.CountFields++;
            this.lines.push(find);
        }
    }

    for (let index = 0; index  this.lines.length; index++) {
        if (index  this.LinePerPage) {
            this.lines[index].style.display = table-row;
        }
        else {
            this.lines[index].style.display = none;
        }
    }

    let calculed = false;
    let multiple = 1;
    while (calculed != true) {
        if (this.CountFields = this.LinePerPage  multiple) {
            break;
        } else {
            multiple++;
        }
    }

    this.qtd_page = multiple;

    var pageInit = document.createElement(div);
    pageInit.classList.add(pag-init);
    pageInit.addEventListener('click', () = setPage(pageInit, this.GetPagination, this.lines, this.LinePerPage));
    pageInit.innerText = ``;

    this.GetPagination.appendChild(pageInit);

    for (let index = 0; index  this.qtd_page; index++) {
        let page = document.createElement(div);
        page.classList.add(pag);
        page.addEventListener('click', () = setPage(page, this.GetPagination, this.lines, this.LinePerPage));
        page.innerText = `${index + 1}`;
        if (index == 0) {
            page.classList.add(active);
        }
        this.GetPagination.appendChild(page);
    }

    let pageEnd = document.createElement(div);
    pageEnd.classList.add(pag-end);
    pageEnd.addEventListener('click', () = setPage(pageEnd, this.GetPagination, this.lines, this.LinePerPage, this.qtd_page));
    pageEnd.innerText = ``;

    this.GetPagination.appendChild(pageEnd);

    function setPage(e, GetPagination, lines, LinePerPage, lengthPage) {

        const value = e.innerText;

        let currentPage = null;
        let currentElement = null;

        for (let index = 0; index  GetPagination.childNodes.length; index++) {
            const element = GetPagination.childNodes[index];
            if (element.nodeName == DIV) {
                currentPage = element.classList.contains(active)  element.innerText  null;
                if (currentPage != null) {
                    currentElement = element;
                    break;
                }
            }
        }

        if (currentPage != value) {

            currentElement.classList.remove(active);
            e.classList.add(active);

            switch (value) {
                case 
                    const rangeInit = ((LinePerPage  1) - qtd_pages);

                    for (let index = 0; index  lines.length; index++) {
                        if (index = rangeInit && index = ((LinePerPage  1) - 1)) {
                            lines[index].style.display = table-row;
                        } else {
                            lines[index].style.display = none;
                        }
                    }
                    console.log(Voltou para o inicio);
                    break;
                case 
                    const rangeEnd = ((LinePerPage  lengthPage) - qtd_pages);
                    console.log(qtd_pages);
                    console.log()
                    console.log(Range do final  + rangeEnd);

                    for (let index = 0; index  lines.length; index++) {
                        if (index = rangeEnd && index = ((LinePerPage  (qtd_pages)) - 1)) {
                            lines[index].style.display = table-row;
                        } else {
                            lines[index].style.display = none;
                        }
                    }
                    console.log(Foi para o final);
                    break;
                default
                    const range = ((LinePerPage  value) - qtd_pages);
                    console.log(range);
                    for (let index = 0; index  lines.length; index++) {
                        if (index = range && index = ((LinePerPage  value) - 1)) {
                            lines[index].style.display = table-row;
                        } else {
                            lines[index].style.display = none;
                        }
                    }
                    break;
            }
        }
        else {
            console.log(Mesma Página)
        }

    }

}
