import { Grid, IconButton, TextField } from "@material-ui/core";
import { orderBy } from "lodash";
import HighlightOffOutlinedIcon from '@material-ui/icons/HighlightOffOutlined';
import { FormBuilderStyles } from "../../style";

const QuestionValues = ({
    question,
    onFieldChange
}) => {

    const classes = FormBuilderStyles();

    const values = orderBy([...question?.values ?? [], { value: '', isNew: true, order: question?.values?.length }] ?? [{}], 'order');

    const getValues = () => {
        return values.filter(v => v.value);
    }

    const onValueChange = (newVal, index) => {
        let valuesToSave = getValues();
        if (index == values?.length - 1) {
            valuesToSave = values;//Saving the new option
            const { isNew, ...others } = valuesToSave[index];
            valuesToSave[index] = others;
        }
        valuesToSave[index] = { value: newVal };
        onFieldChange('values', valuesToSave?.map((v, index) => ({ ...v, order: index })));
    }

    // const onAddValue = () => {
    //     onFieldChange('values', [...values, {}]);
    // }

    const onDeleteValue = (rowIndex) => {
        const valuesToSave = getValues();
        valuesToSave.splice(rowIndex, 1);
        onFieldChange('values', valuesToSave?.map((v, index) => ({ ...v, order: index })));
    }

    return (
        <Grid direction="column" spacing={1} container className={classes.optionsContainer} >
            <div className={classes.optionsContainerTitle}>Options</div>
            {values.map((v, index) => (
                <>
                    <TextField
                        value={v?.value ?? ""}
                        elementType="input"
                        variant="standard"
                        onChange={e => {
                            onValueChange(e.target.value, index)
                        }}
                        placeholder={option?.isNew ? '+ Type a new option...' : undefined}
                    />
                    {!option?.isNew &&
                        <IconButton onClick={() => onDeleteValue(rowIndex)}>
                            <HighlightOffOutlinedIcon style={{ width: '0.7em' }} />
                        </IconButton>}
                </>
            ))}
            {/* <Button variant='outlined' onClick={onAddValue}>Add option</Button> */}
        </Grid>
    );
}
export default QuestionValues;

