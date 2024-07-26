import css from './Options.module.css'

export default function Options  ({ onUpdate, total, toReset, initCounts })  {
    return (
        <div className={css.container}>
            <button className={css.btn} type="button" onClick={() => onUpdate('good')}>Good</button>
            <button className={css.btn} type="button" onClick={() => onUpdate('neutral')}>Neutral</button>
            <button className={css.btn} type="button" onClick={() => onUpdate('bad')}>Bad</button>

            {total > 0 && (
                <button className={css.btn} type="reset" onClick={() => toReset(initCounts)}>Reset</button>
            )}
        </div>
    );
}