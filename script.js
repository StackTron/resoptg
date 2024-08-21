document.addEventListener('DOMContentLoaded', function() {
    const nonNoviceAgentData = [
        { product: "ОСАГО", nb: 0, pr: 0, mvNb: 0, mvPr: 0 },
        { product: "КАСКО", nb: 0, pr: 0, mvNb: 0.02, mvPr: 0.01 },
        { product: "КАСКО-Профи", nb: 0, pr: 0, mvNb: 0.02, mvPr: 0.01 },
        { product: "РАП", nb: 0, pr: 0, mvNb: 0.02, mvPr: 0.01 },
        { product: "Квартиры", nb: 0, pr: 0, mvNb: 0.07, mvPr: 0.05 },
        { product: "Дома", nb: 0, pr: 0, mvNb: 0.07, mvPr: 0.05 },
        { product: "РЕСО ВЕТ", nb: 0, pr: 0, mvNb: 0.10, mvPr: 0.10 },
        { product: "ТМ", nb: 0, pr: 0, mvNb: 0.10, mvPr: 0.10 },
        { product: "Клещ", nb: 0, pr: 0, mvNb: 0.05, mvPr: 0.05 },
        { product: "Доктор РЕСО", nb: 0, pr: 0, mvNb: 0.02, mvPr: 0.02 },
        { product: "Поберегись", nb: 0, pr: 0, mvNb: 0.05, mvPr: 0.05 },
        { product: "Подорожник", nb: 0, pr: 0, mvNb: 0.08, mvPr: 0.03 },
        { product: "НС", nb: 0, pr: 0, mvNb: 0.08, mvPr: 0.03 },
        { product: "Ипотека", nb: 0, pr: 0, mvNb: 0.02, mvPr: 0.02 },  
        { product: "РЕСО-СМБ", nb: 0, pr: 0, mvNb: 0.10, mvPr: 0.05 },
        { product: "Итоговый заработок", nb: 0, pr: 0, mvNb: 0.10, mvPr: 0.05 }
    ];

    function populateTable(tableId, data) {
        const tableBody = document.querySelector(`#${tableId} tbody`);
        data.forEach(item => {
            const row = document.createElement('tr');
            const total = (item.nb * item.mvNb) + (item.pr * item.mvPr);
            row.innerHTML = `
                <td>${item.product}</td>
                <td><input type="number" value="${item.nb}" class="nb-input" data-mvnb="${item.mvNb}" data-mvpr="${item.mvPr}"></td>
                <td><input type="number" value="${item.pr}" class="pr-input" data-mvnb="${item.mvNb}" data-mvpr="${item.mvPr}"></td>
                <td class="mv-nb">${(item.nb * item.mvNb).toFixed(2)}</td>
                <td class="mv-pr">${(item.pr * item.mvPr).toFixed(2)}</td>
                <td class="total">${total.toFixed(2)}</td>
                <td>${(item.mvNb * 100).toFixed(0)}%</td>
                <td>${(item.mvPr * 100).toFixed(0)}%</td>
            `;
            tableBody.appendChild(row);
        });

        tableBody.addEventListener('input', function(event) {
            if (event.target.classList.contains('nb-input') || event.target.classList.contains('pr-input')) {
                const row = event.target.closest('tr');
                const nb = parseFloat(row.querySelector('.nb-input').value) || 0;
                const pr = parseFloat(row.querySelector('.pr-input').value) || 0;
                const mvNb = parseFloat(event.target.dataset.mvnb);
                const mvPr = parseFloat(event.target.dataset.mvpr);

                const mvNbValue = nb * mvNb;
                const mvPrValue = pr * mvPr;
                const totalValue = mvNbValue + mvPrValue;

                row.querySelector('.mv-nb').textContent = mvNbValue.toFixed(2);
                row.querySelector('.mv-pr').textContent = mvPrValue.toFixed(2);
                row.querySelector('.total').textContent = totalValue.toFixed(2);
            }
        });
    }

    populateTable('non-novice-agent-table', nonNoviceAgentData);
});
