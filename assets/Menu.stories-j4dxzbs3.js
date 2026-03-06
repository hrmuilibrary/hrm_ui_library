import{j as e}from"./jsx-runtime-BWL0Uqfu.js";import{r as i}from"./iframe-CxYI0EWd.js";import{M as C,N as I}from"./NestedMenu-CQ7tjaKa.js";import{B as b}from"./Button-DOL9xF0T.js";import{I as y}from"./IconArrowDownloadFilled-DeZuODZt.js";import{I as g,a as h,b as x}from"./IconBeach-fXpl7iha.js";import{I as M}from"./IconMore-CwWsA6hY.js";import{I as O}from"./IconCheckmark-QKjn9JJt.js";import{I as n}from"./IconSettings-CMDUqjv_.js";import"./preload-helper-Dp1pzeXC.js";import"./Tooltip-B02AfB-D.js";import"./index-Du6-9Mdg.js";import"./Text-DbjSgsyH.js";import"./helpers-Me6vAPdm.js";import"./index-DYDl_GcV.js";import"./types-CyyjeX0T.js";import"./Popover-DYInKUEg.js";import"./IconDismiss-C984OP64.js";import"./Link-Bu32HQOo.js";import"./index-bcskSfJh.js";import"./CollapseGroup-Lk86UPmy.js";import"./Divider-svS-q4-b.js";import"./AnimatePresenceWrapper-60m3Q6fP.js";import"./IconChevronDown-C54M6bN4.js";import"./IconChevronUp-BVE_dipC.js";import"./IconChevronRight-DIaJwf70.js";import"./AvatarGroup-CzhZhSbF.js";import"./DropzoneFileUpload-DtCyyDe1.js";import"./Label-DIp6Fp5-.js";import"./useFormProps-vNmMLqJU.js";import"./ErrorMessage-ZSw-FjO6.js";import"./IconDynamicComponent-49CGwydg.js";import"./Snackbar-DUsYBUo-.js";import"./Alert-BwkFTUeF.js";import"./IconDismissFilled-BOZMYhUf.js";import"./Progress-NvIlLS7W.js";import"./IconAdd-B8_Fyla6.js";import"./Checkbox-DE_FgKiO.js";import"./IconInfo-_4ulWNhk.js";const fe={title:"Menu",component:C,argTypes:{position:{type:["left","right","bottom"],control:{type:"radio"}}}},P=[{label:"Edit",iconProps:{Component:y},handler:()=>{console.log("edit")},value:1,meta:"meta"},{label:"Save changes",iconProps:{Component:g},handler:()=>{console.log("add")},value:2},{label:"Delete",iconProps:{Component:O,type:"selected"},handler:()=>{console.log("delete")},value:3},{label:"logout",value:4,iconProps:{Component:h,type:"selected"},handler:()=>{}}],S=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:M}}),e.jsx(C,{...p,onClose:()=>o(!1),parentRef:l,menuItems:P,isOpen:t})]})})},s=S.bind({}),j=[{title:"People",value:1,iconProps:{Component:n,size:"medium"},isOpen:!0,subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")},disabled:!0},{label:"Users and permissions",value:2,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]},{title:"Attendance and absence management",value:2,iconProps:{Component:x},subItems:[{label:"Libraries",value:1,iconProps:{Component:n,size:"medium"},handler:()=>{console.log("libraries")}}]}],R=p=>{const[l,a]=i.useState(null),[t,o]=i.useState(!1);return e.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:e.jsxs("div",{style:{position:"relative",width:"fit-content"},ref:a,children:[e.jsx(b,{onClick:()=>o(!t),iconProps:{Component:n},type:"tertiary"}),e.jsx(I,{...p,onClose:()=>o(!1),parentRef:l,menuItems:j,isOpen:t,position:"bottom-left"})]})})},r=R.bind({});var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`args => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconMore
      }} />
        <_Menu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={items} isOpen={open} />
      </div>
    </div>;
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,f,v;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  return <div style={{
    display: 'flex',
    justifyContent: 'flex-end'
  }}>
      <div style={{
      position: 'relative',
      width: 'fit-content'
    }} ref={setRef}>
        <Button onClick={() => setOpen(!open)} iconProps={{
        Component: IconSettings
      }} type="tertiary" />
        <_NestedMenu {...args} onClose={() => setOpen(false)} parentRef={ref} menuItems={NestedItems} isOpen={open} position="bottom-left" />
      </div>
    </div>;
}`,...(v=(f=r.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ve=["Menu","NestedMenu"];export{s as Menu,r as NestedMenu,ve as __namedExportsOrder,fe as default};
