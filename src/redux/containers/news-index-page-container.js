import { connect } from 'react-redux';
import NewsIndexPage from '../../pages/news-index-page';

const mapStateToProps = state => ({
  news: state.appState.news,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(NewsIndexPage);
