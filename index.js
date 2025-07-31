let currentResults = [];
let allData = [];

// 初始化页面
function initPage() {
    allData = combineData();
    initFilters();
    displayResults(allData);
}

// 存储选中的省份、城市和专业
let selectedProvinces = [];
let selectedCities = [];
let selectedMajors = [];

// 初始化弹窗功能
function initModals() {
    // 省份选择按钮
    document.getElementById('provinceSelectBtn').addEventListener('click', () => {
        openModal('provinceModal');
    });
    
    // 城市选择按钮
    document.getElementById('citySelectBtn').addEventListener('click', () => {
        openModal('cityModal');
    });
    
    // 专业选择按钮
    document.getElementById('majorSelectBtn').addEventListener('click', () => {
        openModal('majorModal');
    });
    
    // 省份弹窗事件
    document.getElementById('provinceModalClose').addEventListener('click', () => {
        closeModal('provinceModal');
    });
    document.getElementById('provinceCancel').addEventListener('click', () => {
        closeModal('provinceModal');
    });
    document.getElementById('provinceConfirm').addEventListener('click', () => {
        confirmProvinceSelection();
    });
    
    // 城市弹窗事件
    document.getElementById('cityModalClose').addEventListener('click', () => {
        closeModal('cityModal');
    });
    document.getElementById('cityCancel').addEventListener('click', () => {
        closeModal('cityModal');
    });
    document.getElementById('cityConfirm').addEventListener('click', () => {
        confirmCitySelection();
    });
    
    // 专业弹窗事件
    document.getElementById('majorModalClose').addEventListener('click', () => {
        closeModal('majorModal');
    });
    document.getElementById('majorCancel').addEventListener('click', () => {
        closeModal('majorModal');
    });
    document.getElementById('majorConfirm').addEventListener('click', () => {
        confirmMajorSelection();
    });
    
    // 点击弹窗外部关闭
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            event.target.style.display = 'none';
        }
    });
}

// 打开弹窗
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    
    // 根据当前选中状态更新复选框
    if (modalId === 'provinceModal') {
        updateCheckboxStates('provinceOptions', selectedProvinces);
    } else if (modalId === 'cityModal') {
        updateCheckboxStates('cityOptions', selectedCities);
    } else if (modalId === 'majorModal') {
        updateCheckboxStates('majorOptions', selectedMajors);
    }
}

// 关闭弹窗
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// 更新复选框状态
function updateCheckboxStates(containerId, selectedValues) {
    const checkboxes = document.querySelectorAll(`#${containerId} input[type="checkbox"]`);
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectedValues.includes(checkbox.value);
    });
}

// 确认省份选择
function confirmProvinceSelection() {
    const checkedBoxes = document.querySelectorAll('#provinceOptions input[type="checkbox"]:checked');
    selectedProvinces = Array.from(checkedBoxes).map(cb => cb.value);
    updateSelectedTags('selectedProvinces', selectedProvinces, 'province');
    closeModal('provinceModal');
    applyFilters();
}

// 确认城市选择
function confirmCitySelection() {
    const checkedBoxes = document.querySelectorAll('#cityOptions input[type="checkbox"]:checked');
    selectedCities = Array.from(checkedBoxes).map(cb => cb.value);
    updateSelectedTags('selectedCities', selectedCities, 'city');
    closeModal('cityModal');
    applyFilters();
}

// 确认专业选择
function confirmMajorSelection() {
    const checkedBoxes = document.querySelectorAll('#majorOptions input[type="checkbox"]:checked');
    selectedMajors = Array.from(checkedBoxes).map(cb => cb.value);
    updateSelectedTags('selectedMajors', selectedMajors, 'major');
    closeModal('majorModal');
    applyFilters();
}

// 更新已选标签显示
function updateSelectedTags(containerId, selectedValues, type) {
    const container = document.getElementById(containerId);
    container.innerHTML = selectedValues.map(value => `
        <span class="tag">
            ${value}
            <span class="remove" onclick="removeTag('${type}', '${value}')">&times;</span>
        </span>
    `).join('');
}

// 删除单个标签
function removeTag(type, value) {
    if (type === 'province') {
        selectedProvinces = selectedProvinces.filter(p => p !== value);
        updateSelectedTags('selectedProvinces', selectedProvinces, 'province');
    } else if (type === 'city') {
        selectedCities = selectedCities.filter(c => c !== value);
        updateSelectedTags('selectedCities', selectedCities, 'city');
    } else if (type === 'major') {
        selectedMajors = selectedMajors.filter(m => m !== value);
        updateSelectedTags('selectedMajors', selectedMajors, 'major');
    }
    applyFilters();
}

// 合并学校和专业数据
function combineData() {
    const combined = [];
    
    majors.forEach(major => {
        const school = schools.find(s => s.id === major.schoolId);
        if (school) {
            combined.push({
                name: school.name,
                code: school.id,
                province: school.province,
                city: school.city,
                majorName: major.majorName,
                majorCode: major.majorCode,
                planCount: major.planCount,
                fee: major.tuition,
                subject: major.subject,
                majorGroupId: major.majorGroupId
            });
        }
    });
    
    return combined;
}

// 创建复选框组
function createCheckboxGroup(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = items.map(item => `
        <div class="checkbox-item">
            <input type="checkbox" value="${item}" id="${containerId}_${item}">
            <label for="${containerId}_${item}">${item}</label>
        </div>
    `).join('');
}

// 初始化筛选器
function initFilters() {
    const provinces = [...new Set(allData.map(item => item.province))].sort();
    const cities = [...new Set(allData.map(item => item.city))].sort();
    const majors = [...new Set(allData.map(item => item.majorName))].filter(name => name && name.trim()).sort();
    
    createCheckboxGroup('provinceOptions', provinces);
    createCheckboxGroup('cityOptions', cities);
    createCheckboxGroup('majorOptions', majors);
    
    // 初始化弹窗功能
    initModals();
}

// 获取科目类型
function getSubjects() {
    const subjects = new Set();
    allData.forEach(item => {
        if (item.subject) {
            subjects.add(item.subject);
        }
    });
    return Array.from(subjects).sort();
}

// 获取省份
function getProvinces() {
    const provinces = new Set();
    allData.forEach(item => {
        if (item.province) {
            provinces.add(item.province);
        }
    });
    return Array.from(provinces).sort();
}

// 获取城市
function getCities() {
    const cities = new Set();
    allData.forEach(item => {
        if (item.city) {
            cities.add(item.city);
        }
    });
    return Array.from(cities).sort();
}

// 切换筛选项
function toggleFilter(element) {
    const checkbox = element.querySelector('input');
    checkbox.checked = !checkbox.checked;
    element.classList.toggle('selected', checkbox.checked);
}

// 应用筛选
function applyFilters() {
    const filters = {
        subjects: getSelectedValues('typeFilters'),
        provinces: selectedProvinces,
        cities: selectedCities,
        majors: selectedMajors,
        minPlanCount: parseInt(document.getElementById('minPlanCount').value) || null,
        maxPlanCount: parseInt(document.getElementById('maxPlanCount').value) || null,
        minFee: parseInt(document.getElementById('minFee').value) || null,
        maxFee: parseInt(document.getElementById('maxFee').value) || null
    };

    currentResults = filterData(filters);
    displayResults(currentResults);
}

// 筛选数据
function filterData(filters) {
    return allData.filter(item => {
        // 科目筛选
        if (filters.subjects.length > 0 && !filters.subjects.includes(item.subject)) {
            return false;
        }

        // 省份筛选
        if (filters.provinces.length > 0 && !filters.provinces.includes(item.province)) {
            return false;
        }

        // 城市筛选
        if (filters.cities.length > 0 && !filters.cities.includes(item.city)) {
            return false;
        }

        // 专业名称筛选
        if (filters.majors && filters.majors.length > 0 && !filters.majors.includes(item.majorName)) {
            return false;
        }

        // 招生计划筛选
        if (filters.minPlanCount !== null && item.planCount < filters.minPlanCount) {
            return false;
        }
        if (filters.maxPlanCount !== null && item.planCount > filters.maxPlanCount) {
            return false;
        }

        // 收费筛选
        if (filters.minFee !== null && item.fee < filters.minFee) {
            return false;
        }
        if (filters.maxFee !== null && item.fee > filters.maxFee) {
            return false;
        }

        return true;
    });
}

// 获取选中的值
function getSelectedValues(containerId) {
    const container = document.getElementById(containerId);
    const checkboxes = container.querySelectorAll('input:checked');
    return Array.from(checkboxes).map(cb => cb.value);
}

// 重置筛选
function resetFilters() {
    // 清除所有选中状态
    document.querySelectorAll('.checkbox-item').forEach(item => {
        item.classList.remove('selected');
        item.querySelector('input').checked = false;
    });

    // 清除选中的省份、城市和专业
    selectedProvinces = [];
    selectedCities = [];
    selectedMajors = [];
    updateSelectedTags('selectedProvinces', selectedProvinces, 'province');
    updateSelectedTags('selectedCities', selectedCities, 'city');
    updateSelectedTags('selectedMajors', selectedMajors, 'major');
    
    // 清除输入框
    document.getElementById('minPlanCount').value = '';
    document.getElementById('maxPlanCount').value = '';
    document.getElementById('minFee').value = '';
    document.getElementById('maxFee').value = '';

    // 重置排序
    document.getElementById('sortSelect').value = 'default';

    // 显示所有数据
    currentResults = allData;
    displayResults(currentResults);
}

// 排序结果
function sortResults() {
    const sortValue = document.getElementById('sortSelect').value;
    
    if (sortValue === 'default') {
        displayResults(currentResults);
        return;
    }
    
    const sortedResults = [...currentResults].sort((a, b) => {
        switch (sortValue) {
            case 'planCount-desc':
                return b.planCount - a.planCount;
            case 'planCount-asc':
                return a.planCount - b.planCount;
            case 'fee-desc':
                return (b.fee || 0) - (a.fee || 0);
            case 'fee-asc':
                return (a.fee || 0) - (b.fee || 0);
            case 'ai-score-desc': {
                const aAnalysis = getMajorAiAnalysis(a.majorName);
                const bAnalysis = getMajorAiAnalysis(b.majorName);
                const aScore = aAnalysis ? aAnalysis.recommendationScore : 0;
                const bScore = bAnalysis ? bAnalysis.recommendationScore : 0;
                return bScore - aScore;
            }
            case 'ai-score-asc': {
                const aAnalysis = getMajorAiAnalysis(a.majorName);
                const bAnalysis = getMajorAiAnalysis(b.majorName);
                const aScore = aAnalysis ? aAnalysis.recommendationScore : 0;
                const bScore = bAnalysis ? bAnalysis.recommendationScore : 0;
                return aScore - bScore;
            }
            case 'name-asc':
                return a.name.localeCompare(b.name, 'zh-CN');
            default:
                return 0;
        }
    });
    
    displayResults(sortedResults);
}

// 获取专业AI分析数据
function getMajorAiAnalysis(majorName) {
    if (typeof majorAiAnalysis === 'undefined') {
        return null;
    }
    
    // 精确匹配
    let analysis = majorAiAnalysis.find(item => item.majorName === majorName);
    
    // 如果没有精确匹配，尝试模糊匹配
    if (!analysis) {
        analysis = majorAiAnalysis.find(item => 
            item.majorName.includes(majorName) || majorName.includes(item.majorName)
        );
    }
    
    return analysis;
}

// 显示结果
function displayResults(results) {
    const resultsGrid = document.getElementById('resultsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    resultsCount.textContent = `共找到 ${results.length} 条记录`;
    
    if (results.length === 0) {
        resultsGrid.innerHTML = '<div class="no-results">没有找到符合条件的专业</div>';
        return;
    }
    
    resultsGrid.innerHTML = `
        <table class="results-table">
            <thead>
                <tr>
                    <th>省份</th>
                    <th>城市</th>
                    <th>学校</th>
                    <th>专业类型</th>
                    <th>专业代码</th>
                    <th>专业</th>
                    <th>计划招收人数</th>
                    <th>学费(元/年)</th>
                    <th>AI推荐分数</th>
                    <th>AI替代风险</th>
                    <th>推荐理由</th>
                    <th>风险分析</th>
                </tr>
            </thead>
            <tbody>
                ${results.map(item => {
                    const aiAnalysis = getMajorAiAnalysis(item.majorName);
                    return `
                        <tr>
                            <td>${item.province}</td>
                            <td>${item.city}</td>
                            <td>${item.name}</td>
                            <td>${item.subject}</td>
                            <td>${item.majorCode}</td>
                            <td>${item.majorName}</td>
                            <td>${item.planCount}</td>
                            <td>${item.fee ? item.fee.toLocaleString() : '待定'}</td>
                            <td class="ai-score">${aiAnalysis ? aiAnalysis.recommendationScore : '-'}</td>
                            <td class="ai-risk ai-risk-${aiAnalysis ? aiAnalysis.aiReplacementRisk : 'unknown'}">${aiAnalysis ? aiAnalysis.aiReplacementRisk : '-'}</td>
                            <td class="ai-reason" title="${aiAnalysis ? aiAnalysis.aiRecommendationReason : ''}">${aiAnalysis && aiAnalysis.aiRecommendationReason ? (aiAnalysis.aiRecommendationReason.length > 50 ? aiAnalysis.aiRecommendationReason.substring(0, 50) + '...' : aiAnalysis.aiRecommendationReason) : '-'}</td>
                            <td class="ai-risks" title="${aiAnalysis ? aiAnalysis.risks : ''}">${aiAnalysis && aiAnalysis.risks ? (aiAnalysis.risks.length > 50 ? aiAnalysis.risks.substring(0, 50) + '...' : aiAnalysis.risks) : '-'}</td>
                        </tr>
                    `;
                }).join('')}
            </tbody>
        </table>
    `;
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面
    initPage();
});